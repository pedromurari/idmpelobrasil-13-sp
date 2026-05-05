import { useEffect } from "react";
import { EnrollmentForm } from "@/components/EnrollmentForm";
import { PillarCard } from "@/components/PillarCard";
import { FAQItem } from "@/components/FAQItem";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StudentGallery } from "@/components/StudentGallery";
import { Accordion } from "@/components/ui/accordion";
import rodrygoMurari from "@/assets/rodrygo-murari.png";
import { VideoPlayer } from "@/components/VideoPlayer";

const Index = () => {
  useEffect(() => {
    // Meta Pixel is loaded in index.html, PageView fires automatically
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="geometric-numbers" aria-hidden="true">
        <div className="number-float">1</div>
        <div className="number-float">2</div>
        <div className="number-float">3</div>
        <div className="number-float">4</div>
        <div className="number-float">5</div>
        <div className="number-float">6</div>
        <div className="number-float">7</div>
        <div className="number-float">8</div>
        <div className="number-float">9</div>
      </div>

      <section className="relative md:py-12 z-10 px-[15px] py-[5px]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <img
              alt="Instituto DespertaMente"
              className="h-20 md:h-28 w-auto animate-fade-in"
              src="/lovable-uploads/80f81ce8-3e86-4c85-861e-48dfe700a84d.png"
            />
          </div>

          <div className="text-center mb-8 animate-fade-in">
            <h1 className="hero-headline">
              <span className="headline-line highlight text-center text-2xl md:text-4xl">
                IDM Pelo Brasil Numerologia: Uma experiencia presencial em Sao
                Paulo para quem quer aprender, vivenciar e aplicar a numerologia
                com clareza.
              </span>
            </h1>
            <h2 className="text-lg md:text-2xl text-muted-foreground mt-4 mb-2 font-semibold">
              Com Rodrygo Murari: Saia com seu mapa numerologico pronto,
              certificado e material de apoio exclusivo para aplicar
              imediatamente.
            </h2>

            <div className="w-full max-w-3xl mx-auto mb-6 -mx-[15px] md:mx-auto">
              <VideoPlayer />
            </div>

            <div className="text-lg md:text-xl text-muted-foreground space-y-2 max-w-3xl mx-auto">
              <div className="bg-card/50 border-2 border-primary/40 rounded-xl p-4 mt-4 mb-4">
                <p className="text-primary font-bold text-xl mb-2">
                  2 TURMAS DISPONIVEIS - 16 de Maio em Pinheiros SP!
                </p>
                <p className="font-semibold text-foreground text-base">
                  Vagas limitadas! Escolha Manha ou Tarde e garanta sua vaga
                  agora.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base mt-4">
                <span className="flex items-center gap-1">
                  Certificado de conclusao
                </span>
                <span className="flex items-center gap-1">
                  Material de apoio exclusivo
                </span>
                <span className="flex items-center gap-1">
                  Vagas limitadas
                </span>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-primary mt-4">
                Garanta sua vaga por apenas R$20 reais.
              </p>
            </div>
          </div>

          <div className="animate-fade-in">
            <EnrollmentForm />
          </div>
        </div>
      </section>

      <StudentGallery />

      <section className="md:py-8 relative z-10 px-[15px] py-[5px]">
        <div className="section-container section-highlight">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            O QUE VOCE VAI DESCOBRIR NESTA EXPERIENCIA PRESENCIAL
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Os 3 pilares do IDM Pelo Brasil Numerologia - conteudo pratico que
            voce aplica no mesmo dia
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <PillarCard
              icon="🧠"
              title="Domine os fundamentos"
              subtitle="Calcule e interprete seus numeros com precisao"
              items={[
                "Calculo correto do numero de destino - entenda a rota da sua vida e tome decisoes mais assertivas",
                "Interpretacao completa dos numeros de 1 a 9 - descubra o significado por tras de cada numero",
                "Estrutura base da numerologia pitagorica - aprenda o sistema milenar usado pelos maiores mestres",
                "Tecnicas praticas de calculo - domine o metodo passo a passo e aplique imediatamente",
              ]}
              footer="Aprenda o metodo exato usado por profissionais"
            />

            <PillarCard
              icon="❤️"
              title="Seu mapa pessoal"
              subtitle="Desvende sua essencia e potencial unico"
              items={[
                "Numero da alma - descubra sua essencia interior e o que realmente te motiva",
                "Numero de expressao - entenda como voce se manifesta e e percebido pelo mundo",
                "Leitura do mapa numerologico completo - saia do encontro com seu mapa pronto em maos",
                "Padroes de comportamento - compreenda por que voce age de determinada forma",
              ]}
              footer="Entenda sua personalidade de forma profunda"
            />

            <PillarCard
              icon="👁️"
              title="Numerologia na pratica"
              subtitle="Transforme teoria em resultados concretos para o dia a dia"
              items={[
                "Numerologia residencial - harmonize a energia da sua casa e melhore o ambiente",
                "Energia da assinatura e nome profissional - potencialize sua marca pessoal",
                "Harmonizacoes simples para o dia a dia - aplique ajustes rapidos com resultados reais",
                "Numerologia em decisoes importantes - use os numeros como guia estrategico",
              ]}
              footer="Ferramentas praticas que voce usa imediatamente"
            />
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="md:py-8 relative z-10 px-[15px] py-[5px]">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img
                alt="Instituto DespertaMente"
                className="h-20 md:h-28 w-auto"
                src="/lovable-uploads/80f81ce8-3e86-4c85-861e-48dfe700a84d.png"
              />
            </div>
            <h2 className="md:text-4xl font-bold text-foreground mb-6 text-2xl">
              QUEM ESTA POR TRAZ DESTE PROJETO?
            </h2>
            <div className="text-lg text-muted-foreground space-y-4 leading-relaxed">
              <p>
                O Instituto DespertaMente e referencia em desenvolvimento
                humano, integrando Psicanalise, PNL, Hipnose e Numerologia
                Pitagorica Sistemica.
              </p>
              <p>
                Nossa missao e clara: tornar o autoconhecimento acessivel
                atraves de experiencias transformadoras, vivencias profundas e
                formacoes de altissima qualidade.
              </p>
              <p className="font-semibold text-primary text-xl price-shine">
                Nao e apenas teoria. E transformacao real na vida de centenas de
                participantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="md:py-8 relative z-10 px-[15px] py-0">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              CONHECA SEU PROFESSOR
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-shrink-0">
                <img
                  src={rodrygoMurari}
                  alt="Rodrygo Murari"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover border-4 border-primary/30 shadow-2xl"
                />
                <div className="text-center mt-4">
                  <p className="text-2xl font-bold text-foreground">
                    Rodrygo Murari
                  </p>
                  <p className="text-primary font-semibold">
                    Fundador e Professor Especialista
                  </p>
                </div>
              </div>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p className="text-center">
                  Com mais de <span className="text-primary font-bold">5.000 HORAS</span>{" "}
                  de atendimentos somados em setting terapeutico, experiencias,
                  treinamentos e mentorias, Rodrygo Murari e especialista em
                  Metafisica Comportamental e PNL Sistemica.
                </p>
                <p className="text-center">
                  Seu proposito? Levar uma "Numerologia Descomplicada".
                </p>
                <p className="text-center">
                  Sua abordagem revolucionaria da Numerologia Sistemica tem
                  transformado a vida de centenas de pessoas no Brasil e na
                  Europa.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <span className="flex items-center gap-2 text-primary">
                    Experiencia comprovada
                  </span>
                  <span className="flex items-center gap-2 text-primary">
                    Metodologia exclusiva
                  </span>
                  <span className="flex items-center gap-2 text-primary">
                    Comprometimento com resultados reais
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:py-8 relative z-10 px-[15px] py-[5px]">
        <div className="section-container section-highlight">
          <div className="max-w-4xl mx-auto">
            <h2 className="md:text-4xl font-bold text-center text-foreground mb-8 text-2xl">
              POR QUE UMA EXPERIENCIA PRESENCIAL TAO ACESSIVEL?
            </h2>
            <div className="text-lg text-muted-foreground space-y-4 leading-relaxed mb-8">
              <p className="text-center">
                Voce deve estar se perguntando: "Como uma experiencia presencial
                com certificado pode custar apenas R$ 20?"
              </p>
              <p className="font-semibold text-primary text-xl text-center">
                A resposta e simples: nossa missao e democratizar o
                autoconhecimento.
              </p>
              <p className="text-center font-semibold text-foreground">
                Este nao e um encontro online generico. E uma experiencia
                presencial, com a profundidade e a interacao que so o contato
                direto pode oferecer.
              </p>
              <p className="text-center">
                Queremos que VOCE tenha acesso a ferramentas poderosas de
                transformacao, independente da sua situacao financeira.
              </p>
              <p className="text-center">
                O investimento simbolico de R$ 20 garante seu compromisso e
                nossa capacidade de organizar o melhor evento possivel.
              </p>
              <p className="text-center text-primary font-bold">
                Aproveite: a proxima turma sera pelo valor integral. Esta e uma
                oportunidade unica.
              </p>
            </div>

            <div className="bg-card border-2 border-primary rounded-2xl p-8 text-center">
              <div className="flex justify-center gap-8 mb-6 flex-wrap">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Valor real da experiencia:
                  </p>
                  <p className="text-3xl font-bold line-through text-muted-foreground">
                    R$ 497
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Seu investimento hoje:
                  </p>
                  <p className="text-4xl font-bold price-shine">R$ 20</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Economia:</p>
                  <p className="text-3xl font-bold text-primary">R$ 477</p>
                </div>
              </div>
              <p className="text-2xl font-bold price-shine">
                Sim, voce esta economizando 96%!
              </p>
            </div>

            <div className="mt-8 bg-card/50 border border-primary/30 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-center text-primary mb-6">
                O QUE ESTA INCLUSO:
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                {[
                  "Encontro presencial completo (4 horas)",
                  "Certificado de conclusao reconhecido",
                  "Material de apoio exclusivo",
                  "Seu mapa numerologico pronto",
                  "Cafe e networking",
                  "Suporte durante o evento",
                  "Acesso ao grupo exclusivo de participantes",
                  "Bonus surpresa no dia",
                ].map((item, index) => (
                  <p key={index} className="flex items-center gap-2">
                    {item}
                  </p>
                ))}
              </div>
              <p className="text-center text-xl font-bold price-shine mt-6">
                TUDO ISSO POR R$ 20!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ULTIMAS VAGAS DISPONIVEIS!
          </h2>
          <p className="text-xl text-primary font-semibold mb-8">
            Nao perca esta oportunidade unica - proxima turma pelo valor
            integral
          </p>
          <div className="text-lg text-muted-foreground space-y-4 mb-8 leading-relaxed">
            <p>Este e um evento presencial com vagas limitadas.</p>
            <p>
              Quando acabarem as vagas, nao havera mais oportunidade de
              participar nesta turma por esse valor promocional.
            </p>
            <p>A proxima turma (se houver) sera pelo valor integral de R$ 497.</p>
            <div className="py-6 space-y-2">
              <p className="font-semibold text-primary text-xl">
                Voce esta a apenas 1 clique de transformar sua visao
              </p>
              <p className="font-semibold text-primary text-xl">
                Sao apenas R$ 20 - menos que um almoco
              </p>
              <p className="font-semibold text-primary text-xl">
                Risco zero e retorno infinito
              </p>
            </div>
            <p className="text-xl">
              A escolha e sua: continuar sem respostas ou descobrir seu
              verdadeiro proposito.
            </p>
          </div>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <button className="w-full max-w-md mx-auto h-auto py-4 px-6 text-lg md:text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
              Ultimas Vagas: Garanta Sua Experiencia Presencial por R$20!
            </button>
          </a>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              + de 500 participantes ja viveram esta experiencia
            </p>
            <p className="flex items-center gap-2">98% de taxa de satisfacao</p>
            <p className="flex items-center gap-2">
              Metodologia comprovada ha mais de 10 anos
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8 px-4 relative z-10">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              PERGUNTAS FREQUENTES
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-xl">
              Tire Suas Duvidas Antes de Garantir Sua Vaga
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              <FAQItem
                value="faq-1"
                question="Nunca estudei numerologia. Esta experiencia e para mim?"
                answer="SIM! Este encontro foi desenvolvido especialmente para iniciantes. Voce nao precisa de conhecimento previo. Vamos comecar do zero e voce saira do evento ja sabendo calcular e interpretar seu proprio mapa numerologico."
              />
              <FAQItem
                value="faq-2"
                question="Por que apenas R$ 20? Qual e a pegadinha?"
                answer="Nao ha pegadinha! Nossa missao e democratizar o autoconhecimento. O valor simbolico garante seu compromisso com a experiencia e cobre custos basicos de material. Queremos que o maximo de pessoas possam ter acesso a essa transformacao."
              />
              <FAQItem
                value="faq-3"
                question="O certificado e reconhecido?"
                answer="Sim! Voce recebera um certificado de conclusao emitido pelo Instituto DespertaMente, valido como comprovacao de participacao e aprendizado em Numerologia Pitagorica Sistemica."
              />
              <FAQItem
                value="faq-4"
                question="Quando e onde sera a experiencia?"
                answer="A experiencia sera realizada no dia 16/05 (Sabado), com duas turmas: Manha (09h as 12h) e Tarde (14h as 17h), presencial em Pinheiros, Sao Paulo - Rua Oscar Freire, 2617 cj 408. As informacoes detalhadas serao enviadas imediatamente apos sua inscricao, por WhatsApp e email."
              />
              <FAQItem
                value="faq-5"
                question="E se eu nao puder comparecer depois de pagar?"
                answer="Entre em contato conosco com 48h de antecedencia. Avaliaremos a possibilidade de transferir sua vaga para a proxima turma ou realizar o reembolso integral."
              />
              <FAQItem
                value="faq-6"
                question="Preciso levar algum material?"
                answer="Nao! Todo material didatico esta incluso. Voce so precisa levar voce mesmo, com mente aberta e vontade de aprender. Recomendamos trazer uma garrafa de agua e um caderno extra se quiser fazer anotacoes pessoais."
              />
              <FAQItem
                value="faq-7"
                question="Vou conseguir fazer calculos numerologicos depois do encontro?"
                answer="COM CERTEZA! A experiencia e 100% pratica. Voce vai calcular seu proprio mapa durante o evento e saira de la apto a calcular para outras pessoas. E aprender fazendo!"
              />
              <FAQItem
                value="faq-8"
                question="O pagamento e seguro?"
                answer="Absolutamente! Utilizamos a plataforma Cakto, uma das mais seguras do Brasil. Seus dados estao 100% protegidos e voce recebera confirmacao imediata do pagamento."
              />
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex justify-center mb-6">
            <img
              alt="Instituto DespertaMente"
              className="h-16 w-auto"
              src="/lovable-uploads/b4dec95d-4969-4772-a141-d5494b0b2efc.png"
            />
          </div>
          <p className="text-xl font-semibold text-foreground">
            Instituto DespertaMente
          </p>
          <p className="text-muted-foreground">
            Transformando vidas atraves do autoconhecimento
          </p>

          <div className="space-y-2 text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              contato@institutodespertamente.com.br
            </p>
            <p className="flex items-center justify-center gap-2">
              WhatsApp: (11) 97537-9719
            </p>
            <p className="flex items-center justify-center gap-2">
              Rua Oscar Freire, 2617 cj 408 - Pinheiros, Sao Paulo
            </p>
          </div>

          <div className="pt-6">
            <p className="text-muted-foreground mb-4">
              Siga-nos nas redes sociais:
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/institutodespertamente/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/institutodespertamente"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.youtube.com/@institutodespertamente"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-border text-sm text-muted-foreground">
            <p>© 2026 Instituto DespertaMente. Todos os direitos reservados.</p>
            <p>CNPJ: 55.184.481/0001-24</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
