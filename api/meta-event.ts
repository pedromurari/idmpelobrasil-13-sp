export const config = {
  runtime: 'edge',
};

async function sha256(message: string) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { 
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const body = await req.json();
    const { 
      eventName, 
      eventID, 
      userData, 
      customData, 
      testCode 
    } = body;

    const PIXEL_ID = process.env.META_PIXEL_ID || '1165211125501519';
    const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;

    if (!ACCESS_TOKEN) {
      console.error('META_ACCESS_TOKEN is not set');
      return new Response(JSON.stringify({ error: 'Server configuration error' }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Hash user data if provided
    const user_data: any = {
      client_ip_address: req.headers.get('x-forwarded-for') || '127.0.0.1',
      client_user_agent: req.headers.get('user-agent') || '',
    };

    if (userData.email) user_data.em = [await sha256(userData.email.trim().toLowerCase())];
    if (userData.phone) user_data.ph = [await sha256(userData.phone.replace(/\D/g, ''))];
    if (userData.firstName) user_data.fn = [await sha256(userData.firstName.trim().toLowerCase())];
    if (userData.lastName) user_data.ln = [await sha256(userData.lastName.trim().toLowerCase())];
    if (userData.externalId) user_data.external_id = [await sha256(userData.externalId)];

    const event = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventID,
      action_source: 'website',
      event_source_url: req.headers.get('referer') || '',
      user_data,
      custom_data: customData,
    };

    const payload: any = {
      data: [event],
    };

    if (testCode) {
      payload.test_event_code = testCode;
    }

    const response = await fetch(
      `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('Meta CAPI Error:', error);
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
