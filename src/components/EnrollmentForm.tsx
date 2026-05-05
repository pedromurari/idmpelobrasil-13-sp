import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { User, Phone, Loader2, Calendar, MapPin } from "lucide-react";
import { MetaIdentity } from "../utils/meta-identity";

type TurmaOption = "04abr_manha" | "04abr_tarde" | null;

const TURMA_CONFIG = {
  "04abr_manha": {
    label: "04/04 - Manha",
    data: "04 de Abril",
    diaSemana: "Sabado",
    horario: "09:00 as 13:00",
    endereco: "Rua Oscar Freire, 2617 cj 408 - Pinheiros, Sao Paulo",
    enderecoDefinido: true,
    sheetUrl:
      "https://script.google.com/macros/s/AKfycbwkXhXPn9PqGg1-YbseGjWwtVPFAA97OZPUqTHancxi_etdmU6SY33dGhp-Zp73qxBbsQ/exec",
    checkoutUrl: "https://checkout.institutodespertamente.shop/VCCL1O8SCVDP",
  },
  "04abr_tarde": {
    label: "04/04 - Tarde",
    data: "04 de Abril",
    diaSemana: "Sabado",
    horario: "14:00 as 18:00",
    endereco: "Rua Oscar Freire, 2617 cj 408 - Pinheiros, Sao Paulo",
    enderecoDefinido: true,
    sheetUrl:
      "https://script.google.com/macros/s/AKfycbzDYLQ02_aInO_3EUi9WkT_W8IjfB7cWz1NW-p0DnoajH0kT9MAS_PwgRYjr1cZfpZSPw/exec",
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
    if (numbers.length <= 2) {
      return numbers;
    }
    if (numbers.length <= 6) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    }
    if (numbers.length <= 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    }
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWhatsapp(formatWhatsApp(e.target.value));
  };

  const validateForm = () => {
    if (name.trim().length < 3) {
      toast({
        title: "Nome invalido",
        description: "Digite seu nome completo com pelo menos 3 caracteres.",
        variant: "destructive",
      });
      return false;
    }

    const numbers = whatsapp.replace(/\D/g, "");
    if (numbers.length < 10 || numbers.length > 11) {
      toast({
        title: "WhatsApp invalido",
        description: "Digite um numero valido com DDD.",
        variant: "destructive",
      });
      return false;
    }

    if (!selectedTurma) {
      toast({
        title: "Selecione uma turma",
        description: "Escolha o horario que deseja reservar na Edicao Sao Paulo.",
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
      formData.append("turma", turmaConfig.label);

      await fetch(turmaConfig.sheetUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      const eventId = `npa_lp_sp_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
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
            content_name: `IDM Pelo Brasil Numerologia - ${turmaConfig.label}`,
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
          headers: {
            "Content-Type": "application/json",
          },
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
              content_name: `IDM Pelo Brasil Numerologia - ${turmaConfig.label}`,
              status: "pending",
            },
          }),
        });
      } catch (capiError) {
        console.error("Erro ao enviar para CAPI:", capiError);
      }

      toast({
        title: "Reserva iniciada com sucesso",
        description: "Redirecionando voce para o pagamento da sua vaga.",
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
        description: "Tente novamente ou fale com a equipe pelo WhatsApp.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <form
      id="formulario-idm"
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-xl rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,hsla(var(--card)/0.96)_0%,hsla(var(--card)/0.88)_100%)] p-6 shadow-[0_24px_80px_rgba(3,8,20,0.45)] backdrop-blur-xl md:p-8"
    >
      <div className="mb-6 text-center">
        <div className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
          IDM Pelo Brasil Numerologia
        </div>
        <h3 className="text-3xl font-bold text-foreground md:text-4xl">
          Reserve sua vaga na Edicao Sao Paulo
        </h3>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          Preencha seus dados, escolha a turma e siga para o checkout seguro da
          experiencia presencial.
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <Label htmlFor="name" className="font-medium text-foreground">
            Nome completo
          </Label>
          <div className="relative mt-2">
            <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="name"
              name="nome"
              type="text"
              placeholder="Digite seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 border-border bg-background/50 pl-11 focus:border-primary"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="whatsapp" className="font-medium text-foreground">
            WhatsApp
          </Label>
          <div className="relative mt-2">
            <div className="absolute left-3 top-1/2 flex -translate-y-1/2 items-center">
              <Phone className="mr-2 h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-semibold text-muted-foreground">+55</span>
            </div>
            <Input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              placeholder="(00) 00000-0000"
              value={whatsapp}
              onChange={handleWhatsAppChange}
              className="h-12 border-border bg-background/50 pl-20 focus:border-primary"
              required
            />
          </div>
        </div>

        <div>
          <Label className="mb-3 flex items-center gap-2 font-medium text-foreground">
            <Calendar className="h-5 w-5" />
            Escolha sua turma na Edicao Sao Paulo
          </Label>
          <div className="space-y-3">
            {(Object.keys(TURMA_CONFIG) as TurmaOption[])
              .filter(Boolean)
              .map((turmaKey) => {
                const turma = TURMA_CONFIG[turmaKey!];
                const isSelected = selectedTurma === turmaKey;
                const icon = turma.horario.includes("09:00") ? "MANHA" : "TARDE";

                return (
                  <button
                    key={turmaKey}
                    type="button"
                    onClick={() => setSelectedTurma(turmaKey)}
                    className={`w-full rounded-xl border-2 p-4 text-left transition-all duration-300 ${
                      isSelected
                        ? "border-primary bg-primary/10 shadow-lg"
                        : "border-border bg-background/50 hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 ${
                          isSelected
                            ? "border-primary bg-primary"
                            : "border-muted-foreground"
                        }`}
                      >
                        {isSelected && (
                          <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-[11px] font-semibold tracking-[0.16em] text-primary">
                            {icon}
                          </span>
                          <p className="font-semibold text-foreground">{turma.data}</p>
                          <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs text-primary">
                            {turma.diaSemana}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {turma.horario}
                        </p>
                        <p
                          className={`mt-1 flex items-center gap-1 text-xs ${
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
          className="relative w-full overflow-hidden rounded-full bg-primary px-8 py-5 text-lg font-bold uppercase tracking-wide text-primary-foreground transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70"
          style={{
            animation: isLoading ? "none" : "pulse-button 2s ease-in-out infinite",
            boxShadow:
              "0 10px 34px hsla(var(--primary) / 0.34), inset 0 -3px 0 rgba(0, 0, 0, 0.15), 0 0 0 3px hsla(var(--primary) / 0.12)",
          }}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 inline h-5 w-5 animate-spin" />
              Processando...
            </>
          ) : (
            <>Garantir minha vaga por R$20</>
          )}
        </button>

        <div className="flex flex-col gap-2 text-center text-sm text-muted-foreground">
          <p>Vagas limitadas para esta edicao</p>
          <p>Seus dados sao tratados com seguranca</p>
          <p>Pagamento seguro no checkout oficial</p>
        </div>
      </div>
    </form>
  );
};
