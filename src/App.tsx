import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import { MetaIdentity } from "./utils/meta-identity";

const queryClient = new QueryClient();

const MetaPixelTracker = () => {
  useEffect(() => {
    // 1. Obter Identidade (ExternalId, FBP, FBC, Dados Salvos)
    const { externalId, fbp, fbc, savedData } = MetaIdentity.getIdentity();

    // Gerar um eventID único para o PageView para desduplicação
    const eventId = `npa_pv_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
    
    // 2. Disparo do Pixel (Browser). 
    // O PageView básico já está no index.html, mas disparamos aqui com IDs para desduplicação via CAPI.
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView', {}, { 
        eventID: eventId,
        external_id: externalId 
      });
    }

    // 3. Disparo da CAPI (Server)
    const urlParams = new URLSearchParams(window.location.search);
    const testCode = urlParams.get('testCode');
    
    fetch('/api/meta-event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName: 'PageView',
        eventID: eventId,
        testCode: testCode,
        fbp: fbp,
        fbc: fbc,
        externalId: externalId,
        userData: savedData, // Usa dados de sessões anteriores se existirem (E-mail/Telefone)
        customData: {}
      })
    })
    .catch(err => console.error("Erro CAPI PageView:", err));
  }, []);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <MetaPixelTracker />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;