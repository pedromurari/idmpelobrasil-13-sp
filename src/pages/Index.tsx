import { useEffect } from "react";
import { MapPin, CalendarDays, ShieldCheck, Sparkles } from "lucide-react";
import { EnrollmentForm } from "@/components/EnrollmentForm";
import { PillarCard } from "@/components/PillarCard";
import { FAQItem } from "@/components/FAQItem";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StudentGallery } from "@/components/StudentGallery";
import { Accordion } from "@/components/ui/accordion";
import rodrygoMurari from "@/assets/rodrygo-murari.png";
import { VideoPlayer } from "@/components/VideoPlayer";

const pillars = [
  {
    icon: "01",
    title: "Fundamentos com clareza",
    subtitle: "Entenda a base da numerologia de forma pratica e aplicavel",
    items: [
      "Aprenda a leitura dos numeros centrais com uma metodologia simples e objetiva",
      "Compreenda como interpretar padroes pessoais com mais seguranca",
      "Construa uma base confiavel para continuar estudando e aplicando",
    ],
    footer:
      "Um encontro pensado para iniciantes e para quem quer aprofundar com metodo.",
  },
  {
    icon: "02",
    title: "Leitura pessoal guiada",
    subtitle: "Viva a experiencia com o seu proprio mapa como referencia",
    items: [
      "Veja como os numeros se conectam com identidade, trajetoria e tomada de decisao",
      "Participe de uma experiencia presencial com apoio e conducoes praticas",
      "Saia com mais clareza para aplicar o conhecimento no seu cotidiano",
    ],
    footer:
      "A proposta e tornar o aprendizado relevante desde o primeiro contato.",
  },
  {
    icon: "03",
    title: "Aplicacao no mundo real",
    subtitle: "Transforme teoria em repertorio para sua vida e sua atuacao",
    items: [
      "Aprenda como observar a numerologia em escolhas, ciclos e posicionamento pessoal",
      "Tenha acesso a uma experiencia que combina conteudo, vivencia e direcionamento",
      "Conecte autoconhecimento com desenvolvimento humano em um formato acessivel",
    ],
    footer: "Mais do que aula: uma edicao presencial oficial do IDM Pelo Brasil.",
  },
];

const faqItems = [
  {
    value: "faq-1",
    question: "Nunca estudei numerologia. Essa edicao e para mim?",
    answer:
      "Sim. A Edicao Sao Paulo foi pensada para quem quer comecar com base, contexto e aplicacao pratica. Voce nao precisa ter experiencia anterior.",
  },
  {
    value: "faq-2",
    question: "Isso e um curso ou uma experiencia presencial?",
    answer:
      "E uma experiencia presencial oficial do IDM Pelo Brasil, com conteudo estruturado, conducao ao vivo, material de apoio e espaco para aprendizado aplicado.",
  },
  {
    value: "faq-3",
    question: "Por que o investimento esta em R$20?",
    answer:
      "Porque essa edicao faz parte de um movimento de expansao do Instituto DespertaMente. O valor simbolico facilita o acesso e ajuda a garantir compromisso real com a vaga.",
  },
  {
    value: "faq-4",
    question: "Quando e onde acontece a Edicao Sao Paulo?",
    answer:
      "A experiencia acontece em Sao Paulo, em Pinheiros, com duas opcoes de horario no dia 04/04. Os detalhes completos sao enviados logo apos a inscricao.",
  },
  {
    value: "faq-5",
    question: "Recebo certificado e material?",
    answer:
      "Sim. A participacao inclui certificado e material de apoio para reforcar a experiencia presencial e facilitar a continuidade do aprendizado.",
  },
  {
    value: "faq-6",
    question: "E seguro fazer minha inscricao e pagamento?",
    answer:
      "Sim. A inscricao coleta apenas os dados necessarios para reserva da vaga e o pagamento e feito por checkout externo seguro.",
  },
];

const Index = () => {
  useEffect(() => {
    // Meta Pixel is loaded in index.html, PageView fires automatically.
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="brand-orbs" aria-hidden="true">
        <span className="brand-orb orb-one" />
        <span className="brand-orb orb-two" />
        <span className="brand-orb orb-three" />
      </div>

      <section className="relative z-10 px-4 pb-8 pt-6 md:px-6 md:pb-12 md:pt-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-8">
            <div className="hero-shell">
              <div className="hero-chip-row">
                <span className="hero-chip">Instituto DespertaMente apresenta</span>
                <span className="hero-chip hero-chip-muted">Edicao Sao Paulo</span>
              </div>

              <div className="space-y-5">
                <p className="eyebrow">IDM Pelo Brasil</p>
                <h1 className="hero-title">
                  Numerologia com a autoridade do IDM e a energia de uma
                  experiencia presencial criada para converter interesse em
                  decisao.
                </h1>
                <p className="hero-subtitle">
                  Uma edicao oficial para quem quer viver a numerologia de forma
                  pratica, elegante e acessivel, com encontro ao vivo,
                  certificado, material de apoio e vagas limitadas em Sao
                  Paulo.
                </p>
              </div>

              <div className="hero-details-grid">
                <div className="detail-card">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <div>
                    <p className="detail-label">Data e formato</p>
                    <p className="detail-value">04 de Abril - 2 turmas presenciais</p>
                  </div>
                </div>
                <div className="detail-card">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="detail-label">Local</p>
                    <p className="detail-value">Pinheiros - Sao Paulo</p>
                  </div>
                </div>
                <div className="detail-card">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <div>
                    <p className="detail-label">Experiencia oficial</p>
                    <p className="detail-value">
                      Certificado + material + suporte
                    </p>
                  </div>
                </div>
              </div>

              <div className="hero-proof">
                <span>Experiencia presencial oficial</span>
                <span>Vagas limitadas</span>
                <span>Investimento de entrada: R$20</span>
              </div>
            </div>

            <div className="hero-media-card">
              <div className="media-copy">
                <p className="media-kicker">Assista antes de reservar sua vaga</p>
                <h2 className="media-title">
                  Entenda o clima da edicao e o posicionamento do novo projeto
                  presencial do IDM.
                </h2>
              </div>
              <VideoPlayer />
            </div>
          </div>

          <div className="lg:sticky lg:top-8">
            <EnrollmentForm />
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-3 md:px-6">
        <div className="section-container section-highlight">
          <div className="mx-auto max-w-6xl">
            <div className="section-heading">
              <p className="section-kicker">Posicionamento da edicao</p>
              <h2 className="section-title">
                Uma landing de alta conversao com cara de marca nacional.
              </h2>
              <p className="section-copy">
                O IDM Pelo Brasil nasce para transformar os presenciais do
                instituto em um produto replicavel, forte e reconhecivel.
                Numerologia e a trilha desta edicao. Sao Paulo e o ponto de
                partida.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="mini-panel">
                <p className="mini-panel-label">Marca principal</p>
                <p className="mini-panel-value">IDM Pelo Brasil</p>
              </div>
              <div className="mini-panel">
                <p className="mini-panel-label">Tema da experiencia</p>
                <p className="mini-panel-value">Numerologia</p>
              </div>
              <div className="mini-panel">
                <p className="mini-panel-label">Recorte local</p>
                <p className="mini-panel-value">Edicao Sao Paulo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StudentGallery />

      <section className="relative z-10 px-4 py-3 md:px-6">
        <div className="section-container">
          <div className="section-heading">
            <p className="section-kicker">O que essa experiencia entrega</p>
            <h2 className="section-title">
              Conteudo, presenca e aplicacao em uma estrutura mais premium.
            </h2>
            <p className="section-copy">
              Mantemos o foco em conversao, mas com um visual mais institucional
              e um discurso mais consistente para sustentar futuras edicoes
              pelo Brasil.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <PillarCard key={pillar.title} {...pillar} />
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="relative z-10 px-4 py-3 md:px-6">
        <div className="section-container">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="profile-card">
              <img
                src={rodrygoMurari}
                alt="Rodrygo Murari"
                className="profile-image"
              />
              <div className="space-y-2 text-center">
                <p className="profile-name">Rodrygo Murari</p>
                <p className="profile-role">Fundador do Instituto DespertaMente</p>
              </div>
            </div>

            <div className="space-y-5">
              <p className="section-kicker">Quem assina a experiencia</p>
              <h2 className="section-title text-left">
                A autoridade do IDM entra em cena para dar consistencia ao novo
                produto presencial.
              </h2>
              <p className="section-copy text-left">
                Rodrygo Murari conduz a trilha de numerologia com repertorio em
                desenvolvimento humano, vivencias, treinamentos e atendimentos.
                O objetivo aqui nao e apenas ensinar um conceito: e construir
                uma experiencia que legitime a marca IDM Pelo Brasil e gere
                desejo real pelas proximas edicoes.
              </p>
              <div className="hero-proof justify-start">
                <span>Metodo proprietario</span>
                <span>Experiencia presencial guiada</span>
                <span>Marca pronta para escalar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-3 md:px-6">
        <div className="section-container section-highlight">
          <div className="mx-auto max-w-5xl text-center">
            <p className="section-kicker">Oferta de entrada</p>
            <h2 className="section-title">
              Uma experiencia com valor percebido alto e barreira de entrada
              baixa.
            </h2>
            <p className="section-copy">
              O valor simbolico de R$20 preserva a urgencia, melhora o
              compromisso com a inscricao e permite apresentar a nova fase do
              produto com cara de oportunidade de lancamento.
            </p>

            <div className="pricing-shell">
              <div className="pricing-card">
                <p className="pricing-label">Valor da experiencia</p>
                <p className="pricing-strike">R$497</p>
              </div>
              <div className="pricing-card pricing-card-featured">
                <p className="pricing-label">Edicao Sao Paulo</p>
                <p className="pricing-main">R$20</p>
              </div>
              <div className="pricing-card">
                <p className="pricing-label">Incluso</p>
                <p className="pricing-side">Certificado + material</p>
              </div>
            </div>

            <div className="grid gap-3 pt-8 text-left md:grid-cols-2">
              {[
                "Encontro presencial oficial do IDM Pelo Brasil",
                "Trilha de Numerologia com aplicacao pratica",
                "Material de apoio para acompanhar a vivencia",
                "Certificado de participacao",
                "Ambiente de networking e troca",
                "Direcionamento para continuidade no ecossistema IDM",
              ].map((item) => (
                <div key={item} className="inclusion-row">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-8 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="section-kicker">Fechamento</p>
          <h2 className="section-title">
            Se Sao Paulo e a primeira edicao, sua vaga precisa entrar agora.
          </h2>
          <p className="section-copy">
            Essa pagina foi redesenhada para vender com mais sofisticacao, mais
            marca e mais autoridade. O proximo passo continua simples:
            preencher, escolher a turma e ir para o checkout.
          </p>

          <a
            href="#formulario-idm"
            onClick={(event) => {
              event.preventDefault();
              const form = document.getElementById("formulario-idm");
              form?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_20px_60px_hsla(var(--primary)/0.28)] transition-transform duration-300 hover:-translate-y-1"
          >
            Reservar minha vaga na Edicao Sao Paulo
          </a>
        </div>
      </section>

      <section className="relative z-10 px-4 py-3 md:px-6">
        <div className="section-container">
          <div className="mx-auto max-w-4xl">
            <div className="section-heading">
              <p className="section-kicker">Perguntas frequentes</p>
              <h2 className="section-title">
                Tire as ultimas duvidas antes de entrar.
              </h2>
              <p className="section-copy">
                O objetivo e deixar a decisao simples, segura e alinhada com a
                nova proposta da marca.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item) => (
                <FAQItem key={item.value} {...item} />
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-border/80 px-4 py-10 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="space-y-2">
            <p className="eyebrow text-sm">IDM Pelo Brasil</p>
            <p className="text-xl font-semibold text-foreground">
              Instituto DespertaMente
            </p>
            <p className="text-sm text-muted-foreground">
              Uma plataforma presencial para edicoes de Numerologia,
              Psicanalise e PNL em diferentes cidades do Brasil.
            </p>
          </div>

          <div className="space-y-1 text-sm text-muted-foreground">
            <p>Contato: contato@institutodespertamente.com.br</p>
            <p>WhatsApp: (11) 97537-9719</p>
            <p>CNPJ: 55.184.481/0001-24</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
