import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { User, Phone, Loader2, Calendar, MapPin } from "lucide-react";

type TurmaOption = "11fev_noite" | "12fev_noite" | "28fev_manha" | "28fev_tarde" | null;

const TURMA_CONFIG = {
  "11fev_noite": {
    label: "11/02 - Noite",
    data: "11 de Fevereiro",
    diaSemana: "Quarta-feira",
    horario: "18:30 às 21:30",
    endereco: "Endereço a definir",
    enderecoDefinido: false,
    sheetUrl: "https://script.google.com/macros/s/AKfycby_4B-B-O27qyvBVYp9qT9tiMQZzi23yx5duKibYnLoEdhwSx9I-5O92n9rMWJ-QUcD/exec",
    checkoutUrl: "https://checkout.institutodespertamente.shop/VCCL1O8SCN12"
  },
  "12fev_noite": {
    label: "12/02 - Noite",
    data: "12 de Fevereiro",
    diaSemana: "Quarta-feira",
    horario: "18:30 às 21:30",
    endereco: "Endereço a definir",
    enderecoDefinido: false,
    sheetUrl: "https://script.google.com/macros/s/AKfycbxi21WTGvGAjr6S3eAMyTT6rYz-FT1m6qDBf7FBR5KHg29pZPetqnraqxsRgEqYAMq0/exec",
    checkoutUrl: "https://checkout.institutodespertamente.shop/VCCL1O8SCN13"
  },
  "28fev_manha": {
    label: "28/02 - Manhã",
    data: "28 de Fevereiro",
    diaSemana: "Sexta-feira",
    horario: "09:00 às 12:00",
    endereco: "Av. Presidente Wilson, 165",
    enderecoDefinido: true,
    sheetUrl: "https://script.google.com/macros/s/AKfycbzjfP4vl7CXoV7oztjfulh3s__XN4GLbDvupGL8YfrFxZCsT3JqsiTTYa_4giITjsvCMg/exec",
    checkoutUrl: "https://checkout.institutodespertamente.shop/VCCL1O8SCNAW"
  },
  "28fev_tarde": {
    label: "28/02 - Tarde",
    data: "28 de Fevereiro",
    diaSemana: "Sexta-feira",
    horario: "14:00 às 17:00",
    endereco: "Av. Presidente Wilson, 165",
    enderecoDefinido: true,
    sheetUrl: "https://script.google.com/macros/s/AKfycbzUDeaBI0V0-IJvzn0gNR_5rROPZl1hLJQW91tQ9NHcxFAPEngazxKAoAtooIdLezte/exec",
    checkoutUrl: "https://checkout.institutodespertamente.shop/VCCL1O8SCNAX"
  }
};

export const EnrollmentForm = () => {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [selectedTurma, setSelectedTurma] = useState<TurmaOption>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, "");
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
    if (!selectedTurma) {
      toast({
        title: "Selecione uma turma",
        description: "Por favor, escolha a turma que deseja participar",
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

    const turmaConfig = TURMA_CONFIG[selectedTurma!];

    try {
      const cleanPhone = whatsapp.replace(/\D/g, "");
      const phoneToSend = "55" + cleanPhone;

      const formData = new FormData();
      formData.append("name", name.trim());
      formData.append("phone", phoneToSend);
      formData.append("turma", turmaConfig.label);

      await fetch(turmaConfig.sheetUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors"
      });

      // Com no-cors não conseguimos verificar response.ok, assumimos sucesso
      // Valores dinâmicos para o Meta Pixel (turma + timestamp para variação)
      const baseValue = selectedTurma?.includes('28fev') ? 12.00 : 10.00;
      const uniqueValue = baseValue + (Date.now() % 100) / 100; // Adiciona variação de centavos
      
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: `Curso Presencial Numerologia - ${turmaConfig.label}`,
          content_category: 'Curso Presencial',
          content_ids: [selectedTurma],
          value: parseFloat(uniqueValue.toFixed(2)),
          currency: 'BRL'
        });
      }
      toast({
        title: "✅ Dados salvos com sucesso!",
        description: "Redirecionando para o pagamento..."
      });

      setTimeout(() => {
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'InitiateCheckout', {
            content_name: `Curso Presencial Numerologia - ${turmaConfig.label}`,
            content_type: 'product',
            value: 10.00,
            currency: 'BRL'
          });
        }
        window.location.href = turmaConfig.checkoutUrl;
      }, 2000);
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

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-6 md:p-8 shadow-2xl">
      <div className="text-center mb-6">
        <h3 className="md:text-3xl font-bold text-foreground mb-2 text-3xl">
          👇 GARANTA SUA VAGA AGORA!
        </h3>
        <p className="text-muted-foreground text-lg">Preencha com seus dados!</p>
      </div>

      <div className="space-y-5">
        <div>
          <Label htmlFor="name" className="text-foreground font-medium">
            Nome Completo
          </Label>
          <div className="relative mt-2">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              id="name"
              type="text"
              placeholder="Digite seu nome completo"
              value={name}
              onChange={e => setName(e.target.value)}
              className="pl-11 h-12 bg-background/50 border-border focus:border-primary"
              required
            />
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
            <Input
              id="whatsapp"
              type="tel"
              placeholder="(00) 00000-0000"
              value={whatsapp}
              onChange={handleWhatsAppChange}
              className="pl-20 h-12 bg-background/50 border-border focus:border-primary"
              required
            />
          </div>
        </div>

        {/* Seleção de Turma */}
        <div>
          <Label className="text-foreground font-medium flex items-center gap-2 mb-3">
            <Calendar className="h-5 w-5" />
            Escolha sua turma - Fevereiro 2025
          </Label>
          <div className="space-y-3">
            {(Object.keys(TURMA_CONFIG) as TurmaOption[]).filter(Boolean).map((turmaKey) => {
              const turma = TURMA_CONFIG[turmaKey!];
              const isSelected = selectedTurma === turmaKey;
              const icon = turma.horario.includes("09:00") ? "☀️" : 
                          turma.horario.includes("14:00") ? "🌅" : "🌙";
              
              return (
                <button
                  key={turmaKey}
                  type="button"
                  onClick={() => setSelectedTurma(turmaKey)}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-300 ${
                    isSelected
                      ? "border-primary bg-primary/10 shadow-lg"
                      : "border-border bg-background/50 hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 mt-1 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                      isSelected ? "border-primary bg-primary" : "border-muted-foreground"
                    }`}>
                      {isSelected && (
                        <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                      )}
                    </div>
                    <div className="text-left flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-lg">{icon}</span>
                        <p className="font-semibold text-foreground">{turma.data}</p>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                          {turma.diaSemana}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        🕐 {turma.horario}
                      </p>
                      <p className={`text-xs mt-1 flex items-center gap-1 ${
                        turma.enderecoDefinido ? "text-muted-foreground" : "text-amber-500"
                      }`}>
                        <MapPin className="h-3 w-3" />
                        {turma.endereco}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-5 px-8 rounded-full transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed text-lg uppercase tracking-wide shadow-lg relative overflow-hidden"
          style={{
            animation: isLoading ? 'none' : 'pulse-button 2s ease-in-out infinite',
            boxShadow: '0 8px 32px hsla(var(--primary) / 0.5), inset 0 -3px 0 rgba(0, 0, 0, 0.2), 0 0 0 3px hsla(var(--primary) / 0.2)'
          }}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin inline" />
              Processando...
            </>
          ) : (
            <>⚡ GARANTIR VAGA PRESENCIAL!</>
          )}
        </button>

        <div className="flex flex-col gap-2 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            ⚡ Últimas vagas disponíveis!
          </p>
          <p className="flex items-center justify-center gap-1">
            🔒 Seus dados estão 100% seguros
          </p>
          <p className="flex items-center justify-center gap-1">💳 Pagamento seguro via Mercado Pago</p>
        </div>
      </div>
    </form>
  );
};