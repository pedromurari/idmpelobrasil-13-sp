import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { User, Phone, Loader2, Calendar, MapPin } from "lucide-react";
import { MetaIdentity } from "../utils/meta-identity";

type TurmaOption = "16mai_manha" | "16mai_tarde" | null;

const TURMA_CONFIG = {
  "16mai_manha": {
    label: "16/05 - Manha",
    data: "16 de Maio",
    diaSemana: "Sabado",
    horario: "09:00 as 13:00",
    endereco: "Rua Oscar Freire, 2617 cj 408 - Pinheiros, Sao Paulo",
    enderecoDefinido: true,
    sheetUrl:
      "https://script.google.com/macros/s/AKfycbxhudvFlfP8_oR0263c-50Qo73T3JA9U07TkjL4mQxosp5Dga-9zpXSRqJY5kcTvIyG/exec",
    checkoutUrl: "https://checkout.institutodespertamente.shop/VCCL1O8SCVDP",
  },
  "16mai_tarde": {
    label: "16/05 - Tarde",
    data: "16 de Maio",
    diaSemana: "Sabado",
    horario: "14:00 as 18:00",
    endereco: "Rua Oscar Freire, 2617 cj 408 - Pinheiros, Sao Paulo",
    enderecoDefinido: true,
    sheetUrl:
      "https://script.google.com/macros/s/AKfycbxhudvFlfP8_oR0263c-50Qo73T3JA9U07TkjL4mQxosp5Dga-9zpXSRqJY5kcTvIyG/exec",
    checkoutUrl: "https://checkout.institutodespertamente.shop/VCCL1O8SCVDQ",
  },
};

export const EnrollmentForm = () => {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [selectedTurma, setSelectedTurma] = useState<TurmaOption>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 10)
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setWhatsapp(formatted);
  };

  const validateForm = () => {
    if (name.trim().length < 3) {
      toast({
        title: "Nome invalido",
        description: "Por favor, digite seu nome completo (minimo 3 caracteres)",
        variant: "destructive",
      });
      return false;
    }
    const numbers = whatsapp.replace(/\D/g, "");
    if (numbers.length < 10 || numbers.length > 11) {
      toast({
        title: "WhatsApp invalido",
        description: "Por favor, digite um numero valido com DDD",
        variant: "destructive",
      });
      return false;
    }
    if (!selectedTurma) {
      toast({
        title: "Selecione uma turma",
        description: "Por favor, escolha a turma que deseja participar",
        variant: "destructive",
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
      let cleanPhone = whatsapp.replace(/\D/g, "");
      if (cleanPhone.length >= 12 && cleanPhone.startsWith("55")) {
        cleanPhone = cleanPhone.slice(2);
      }
      cleanPhone = cleanPhone.slice(0, 11);
      const phoneToSend = `55${cleanPhone}`;

      const formData = new FormData();
      formData.append("name", name.trim());
      formData.append("phone", phoneToSend);
      formData.append(
        "turma",
        selectedTurma === "16mai_manha" ? "manha" : "tarde"
      );

      await fetch(turmaConfig.sheetUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      const eventId = `npa_lp_sp_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
      const { externalId, fbp, fbc } = MetaIdentity.getIdentity();

      MetaIdentity.saveUserData({
        phone: phoneToSend,
        firstName: name.split(" ")[0],
        lastName: name.split(" ").slice(1).join(" "),
      });

      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq(
          "track",
          "Lead",
          {
            content_name: `Inscricao - ${turmaConfig.label}`,
            status: "pending",
          },
          {
            eventID: eventId,
            external_id: externalId,
          }
        );
      }

      try {
        const urlParams = new URLSearchParams(window.location.search);
        const testCode = urlParams.get("testCode");

        await fetch("/api/meta-event", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            eventName: "Lead",
            eventID: eventId,
            testCode,
            fbp,
            fbc,
            externalId,
            userData: {
              phone: phoneToSend,
              firstName: name.split(" ")[0],
              lastName: name.split(" ").slice(1).join(" "),
            },
            customData: {
              content_name: `Inscricao - ${turmaConfig.label}`,
              status: "pending",
            },
          }),
        });
      } catch (capiError) {
        console.error("Erro ao enviar para CAPI:", capiError);
      }

      toast({
        title: "Dados salvos com sucesso!",
        description: "Redirecionando para o pagamento...",
      });

      setTimeout(() => {
        const checkoutEventId = `${eventId}_checkout`;
        const { externalId: freshExternalId, fbp: freshFbp, fbc: freshFbc } =
          MetaIdentity.getIdentity();

        if (typeof window !== "undefined" && (window as any).fbq) {
          (window as any).fbq(
            "track",
            "InitiateCheckout",
            {
              content_name: `IDM Pelo Brasil Numerologia - ${turmaConfig.label}`,
              content_type: "product",
              value: 20,
              currency: "BRL",
            },
            {
              eventID: checkoutEventId,
              external_id: freshExternalId,
            }
          );
        }

        const urlParams = new URLSearchParams(window.location.search);
        const testCode = urlParams.get("testCode");
        fetch("/api/meta-event", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            eventName: "InitiateCheckout",
            eventID: checkoutEventId,
            testCode,
            fbp: freshFbp,
            fbc: freshFbc,
            externalId: freshExternalId,
            userData: {
              firstName: name.split(" ")[0],
              lastName: name.split(" ").slice(1).join(" "),
              phone: phoneToSend,
            },
            customData: {
              content_name: `IDM Pelo Brasil Numerologia - ${turmaConfig.label}`,
              content_type: "product",
              value: 20,
              currency: "BRL",
            },
          }),
        }).catch((err) => console.error("Erro CAPI InitiateCheckout:", err));

        window.location.href = turmaConfig.checkoutUrl;
      }, 1500);
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Erro ao enviar dados",
        description: "Por favor, tente novamente ou entre em contato via WhatsApp",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-6 md:p-8 shadow-2xl"
    >
      <div className="text-center mb-6">
        <h3 className="md:text-3xl font-bold text-foreground mb-2 text-3xl">
          SIM! Quero minha vaga no IDM Pelo Brasil!
        </h3>
        <p className="text-muted-foreground text-lg">
          Garanta sua vaga agora e comece sua jornada de autodescoberta!
        </p>
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
              name="nome"
              type="text"
              placeholder="Digite seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              name="whatsapp"
              type="tel"
              placeholder="(00) 00000-0000"
              value={whatsapp}
              onChange={handleWhatsAppChange}
              className="pl-20 h-12 bg-background/50 border-border focus:border-primary"
              required
            />
          </div>
        </div>

        <div>
          <Label className="text-foreground font-medium flex items-center gap-2 mb-3">
            <Calendar className="h-5 w-5" />
            Escolha sua turma - 16 de Maio
          </Label>
          <div className="space-y-3">
            {(Object.keys(TURMA_CONFIG) as TurmaOption[])
              .filter(Boolean)
              .map((turmaKey) => {
                const turma = TURMA_CONFIG[turmaKey!];
                const isSelected = selectedTurma === turmaKey;
                const icon = turma.horario.includes("09:00")
                  ? "☀️"
                  : turma.horario.includes("14:00")
                    ? "🌇"
                    : "🌙";

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
                      <div
                        className={`w-5 h-5 mt-1 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                          isSelected
                            ? "border-primary bg-primary"
                            : "border-muted-foreground"
                        }`}
                      >
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
                          {turma.horario}
                        </p>
                        <p
                          className={`text-xs mt-1 flex items-center gap-1 ${
                            turma.enderecoDefinido
                              ? "text-muted-foreground"
                              : "text-amber-500"
                          }`}
                        >
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
            animation: isLoading ? "none" : "pulse-button 2s ease-in-out infinite",
            boxShadow:
              "0 8px 32px hsla(var(--primary) / 0.5), inset 0 -3px 0 rgba(0, 0, 0, 0.2), 0 0 0 3px hsla(var(--primary) / 0.2)",
          }}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin inline" />
              Processando...
            </>
          ) : (
            <>Ultimas Vagas: Garanta Sua Experiencia por R$20!</>
          )}
        </button>

        <div className="flex flex-col gap-2 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            Ultimas vagas disponiveis!
          </p>
          <p className="flex items-center justify-center gap-1">
            Seus dados estao 100% seguros
          </p>
          <p className="flex items-center justify-center gap-1">
            Pagamento seguro via Mercado Pago
          </p>
        </div>
      </div>
    </form>
  );
};
