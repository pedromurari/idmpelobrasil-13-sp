import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const MetaPixelTracker = () => {
  useEffect(() => {
    // Gerar um eventID único para o PageView
    const eventId = `npa_pv_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
    
    // 1. Disparo do Pixel (Browser)
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView', {}, { eventID: eventId });
    }

    // 2. Disparo da CAPI (Server)
    const urlParams = new URLSearchParams(window.location.search);
    const testCode = urlParams.get('testCode');
    
    fetch('/api/meta-event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName: 'PageView',
        eventID: eventId,
        testCode: testCode,
        userData: {}, // PageView inicial geralmente não tem dados de usuário vinculados
        customData: {}
      })
    })
    .then(res => res.json())
    .then(data => console.log("CAPI PageView Enviado:", data))
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