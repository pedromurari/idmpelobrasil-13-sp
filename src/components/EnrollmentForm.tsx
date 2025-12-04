import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { User, Phone, Loader2 } from "lucide-react";
export const EnrollmentForm = () => {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const formatWhatsApp = (value: string) => {
    // Remove all non-digits
    const numbers = value.replace(/\D/g, "");

    // Apply mask
    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };
  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setWhatsapp(formatted);
  };
  const validateForm = () => {
    if (name.trim().length < 3) {
      toast({
        title: "Nome inválido",
        description: "Por favor, digite seu nome completo (mínimo 3 caracteres)",
        variant: "destructive"
      });
      return false;
    }
    const numbers = whatsapp.replace(/\D/g, "");
    if (numbers.length < 10 || numbers.length > 11) {
      toast({
        title: "WhatsApp inválido",
        description: "Por favor, digite um número válido com DDD",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      // Clean phone number and add 55 prefix
      const cleanPhone = whatsapp.replace(/\D/g, "");
      const phoneToSend = "55" + cleanPhone;

      // Send to Google Sheets
      const formData = new FormData();
      formData.append("name", name.trim());
      formData.append("phone", phoneToSend);
      const response = await fetch("https://script.google.com/macros/s/AKfycbwoNS_MrxKiVRdMBvUBI0tn94DldtXqo3z6Acn45hvhJtmKcJ2PHtp0fxPf3vmK69xL/exec", {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        // Fire Meta Pixel Lead event
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead', {
            content_name: 'Curso Presencial Numerologia',
            content_category: 'Curso Presencial',
            value: 10.00,
            currency: 'BRL'
          });
        }
        toast({
          title: "✅ Dados salvos com sucesso!",
          description: "Redirecionando para o pagamento..."
        });

        // Wait 2 seconds for pixel to register
        setTimeout(() => {
          // Fire InitiateCheckout event
          if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'InitiateCheckout', {
              content_name: 'Curso Presencial Numerologia',
              content_type: 'product',
              value: 10.00,
              currency: 'BRL'
            });
          }

          // Redirect to checkout
          window.location.href = "https://pay.cakto.com.br/38ehxkj_650680";
        }, 2000);
      } else {
        throw new Error("Erro ao enviar dados");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Erro ao enviar dados",
        description: "Por favor, tente novamente ou entre em contato via WhatsApp",
        variant: "destructive"
      });
      setIsLoading(false);
    }
  };
  return <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-6 md:p-8 shadow-2xl">
      <div className="text-center mb-6">
        <h3 className="md:text-3xl font-bold text-foreground mb-2 text-3xl">
          👇 GARANTA SUA VAGA AGORA!
        </h3>
        <p className="text-muted-foreground text-lg">Preencha com seus dados !     </p>
      </div>

      <div className="space-y-5">
        <div>
          <Label htmlFor="name" className="text-foreground font-medium">
            Nome Completo
          </Label>
          <div className="relative mt-2">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input id="name" type="text" placeholder="Digite seu nome completo" value={name} onChange={e => setName(e.target.value)} className="pl-11 h-12 bg-background/50 border-border focus:border-primary" required />
          </div>
        </div>

        <div>
          <Label htmlFor="whatsapp" className="text-foreground font-medium">
            WhatsApp
          </Label>
          <div className="relative mt-2">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center">
              <Phone className="h-5 w-5 text-muted-foreground mr-2" />
              <span className="text-sm font-semibold text-muted-foreground">+55</span>
            </div>
            <Input id="whatsapp" type="tel" placeholder="(00) 00000-0000" value={whatsapp} onChange={handleWhatsAppChange} className="pl-20 h-12 bg-background/50 border-border focus:border-primary" required />
          </div>
        </div>

        <button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-5 px-8 rounded-full transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed text-lg uppercase tracking-wide shadow-lg relative overflow-hidden" style={{
        animation: isLoading ? 'none' : 'pulse-button 2s ease-in-out infinite',
        boxShadow: '0 8px 32px hsla(var(--primary) / 0.5), inset 0 -3px 0 rgba(0, 0, 0, 0.2), 0 0 0 3px hsla(var(--primary) / 0.2)'
      }}>
          {isLoading ? <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin inline" />
              Processando...
            </> : <>⚡ GARANTIR VAGA PRESENCIAL!</>}
        </button>

        <div className="flex flex-col gap-2 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            ⚡ Últimas vagas disponíveis!
          </p>
          <p className="flex items-center justify-center gap-1">
            🔒 Seus dados estão 100% seguros
          </p>
          <p className="flex items-center justify-center gap-1">
            💳 Pagamento seguro via Cakto
          </p>
        </div>
      </div>
    </form>;
};