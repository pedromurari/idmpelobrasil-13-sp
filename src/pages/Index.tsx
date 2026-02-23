import { useEffect } from "react";
import { EnrollmentForm } from "@/components/EnrollmentForm";
import { PillarCard } from "@/components/PillarCard";
import { FAQItem } from "@/components/FAQItem";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Accordion } from "@/components/ui/accordion";
import logoDespertaMente from "@/assets/despertamente-simbolo.png";
import rodrygoMurari from "@/assets/rodrygo-murari.png";
const Index = () => {
  useEffect(() => {


    // Meta Pixel is loaded in index.html, PageView fires automatically
  }, []);return <div className="min-h-screen relative">
      {/* Geometric Background Numbers */}
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

      {/* Hero Section */}
      <section className="relative md:py-12 z-10 px-[15px] py-[5px]">
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img alt="Instituto DespertaMente" className="h-20 md:h-28 w-auto animate-fade-in" src="/lovable-uploads/80f81ce8-3e86-4c85-861e-48dfe700a84d.png" />
          </div>

          {/* Headline */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="hero-headline">
              <span className="headline-line highlight text-center text-2xl md:text-4xl">Imersão de Numerologia Presencial em Botafogo RJ!</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mt-4 mb-2">
              Descubra o poder dos SEUS NÚMEROS e transforme sua VIDA!! 
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              com Rodrygo Murari - Especialista com mais de 5 MIL horas de experiência
            </p>
            
            {/* Video de Vendas */}
            <div className="w-full max-w-3xl mx-auto mb-6 -mx-[15px] md:mx-auto">
              <div className="aspect-video w-[calc(100%+30px)] md:w-full -ml-[15px] md:ml-0">
                <iframe className="w-full h-full md:rounded-xl" src="https://www.youtube.com/embed/qNFu4xW7wZc?si=rMMsCOg4NgqCAtJJ&controls=0" title="Vídeo de Vendas - Curso de Numerologia" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
              </div>
            </div>

            <div className="text-lg md:text-xl text-muted-foreground space-y-2 max-w-3xl mx-auto">
              <div className="bg-card/50 border-2 border-primary/40 rounded-xl p-4 mt-4 mb-4">
                <p className="text-primary font-bold text-xl mb-2">🔥 2 TURMAS DISPONÍVEIS — 7 de Março em Botafogo!</p>
                <p className="font-semibold text-foreground text-base">Vagas LIMITADAS! Escolha Manhã ou Tarde e garanta sua vaga agora!</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base mt-4">
                <span className="flex items-center gap-1">📜 Certificado de Conclusão</span>
                <span className="flex items-center gap-1">👥 Vagas Limitadas</span>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-primary mt-4">
                Garanta seu Ingresso por APENAS R$10 Reais!    
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="animate-fade-in">
            <EnrollmentForm />
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="md:py-8 relative z-10 px-[15px] py-[5px]">
        <div className="section-container section-highlight">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            🎓 O QUE VOCÊ VAI DESCOBRIR NESTE CURSO PRESENCIAL
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Os 3 Pilares do Curso
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <PillarCard icon="🧠" title="FUNDAMENTOS E CÁLCULOS" subtitle="Domine a Base da Numerologia" items={["Cálculo correto do Número de Destino", "Interpretação completa dos números de 1 a 9", "Estrutura base da numerologia pitagórica", "Técnicas práticas de cálculo"]} footer="Aprenda o método exato usado por profissionais" />

            <PillarCard icon="❤️" title="MAPA PESSOAL E IDENTIDADE" subtitle="Descubra Quem Você Realmente É" items={["Número da Alma - sua essência interior", "Número de Expressão - como você se manifesta", "Introdução à leitura de Mapa Numerológico completo", "Compreenda seus padrões de comportamento"]} footer="Entenda sua personalidade de forma profunda" />

            <PillarCard icon="👁️" title="APLICAÇÕES NA VIDA REAL" subtitle="Transforme Teoria em Resultados" items={["Numerologia Residencial - harmonize sua casa", "Energia da Assinatura e Nome Profissional", "Harmonizações simples para o dia a dia", "Como usar a numerologia em decisões importantes"]} footer="Ferramentas práticas que você usa IMEDIATAMENTE" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* About Instituto */}
      <section className="md:py-8 relative z-10 px-[15px] py-[5px]">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img alt="Instituto DespertaMente" className="h-20 md:h-28 w-auto" src="/lovable-uploads/80f81ce8-3e86-4c85-861e-48dfe700a84d.png" />
            </div>
            <h2 className="md:text-4xl font-bold text-foreground mb-6 text-2xl">🏛️ QUEM ESTÁ POR TRÁS DESTE CURSO?</h2>
            <div className="text-lg text-muted-foreground space-y-4 leading-relaxed">
              <p>
                O Instituto DespertaMente é referência em desenvolvimento humano, integrando
                Psicanálise, PNL, Hipnose e Numerologia Pitagórica Sistêmica.
              </p>
              <p>
                Nossa missão é clara: tornar o autoconhecimento acessível através de experiências
                transformadoras, vivências profundas e formações de altíssima qualidade.
              </p>
              <p className="font-semibold text-primary text-xl price-shine">
                Não é apenas teoria. É transformação real na vida de centenas de alunos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Section */}
      <section className="md:py-8 relative z-10 px-[15px] py-0">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            👨‍🏫 CONHEÇA SEU PROFESSOR
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <img src={rodrygoMurari} alt="Rodrygo Murari" className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover border-4 border-primary/30 shadow-2xl" />
              <div className="text-center mt-4">
                <p className="text-2xl font-bold text-foreground">Rodrygo Murari</p>
                <p className="text-primary font-semibold">Fundador e Professor Especialista</p>
              </div>
            </div>
            <div className="text-muted-foreground space-y-4 leading-relaxed">
              <p className="text-center">
                Com mais de <span className="text-primary font-bold">5.000 HORAS</span> de
                atendimentos somados em Setting Terapêutico, Cursos, Treinamentos e Mentorias,
                Rodrygo Murari é especialista em Metafísica Comportamental e PNL SISTÊMICA.
              </p>
              <p className="text-center">Seu propósito? Levar uma "Numerologia Descomplicada"</p>
              <p className="text-center">Sua abordagem revolucionária da Numerologia Sistêmica tem transformado a vida de centenas de pessoas no Brasil e na Europa.</p>
              <div className="flex flex-wrap gap-4 pt-4">
                <span className="flex items-center gap-2 text-primary">
                  📍 Experiência comprovada
                </span>
                <span className="flex items-center gap-2 text-primary">
                  🎯 Metodologia exclusiva
                </span>
                <span className="flex items-center gap-2 text-primary">
                  ❤️ Comprometimento com resultados reais
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Why R$10 Section */}
      <section className="md:py-8 relative z-10 px-[15px] py-[5px]">
        <div className="section-container section-highlight">
          <div className="max-w-4xl mx-auto">
          <h2 className="md:text-4xl font-bold text-center text-foreground mb-8 text-2xl">
            🤔 POR QUE UM CURSO PRESENCIAL TÃO BARATO?
          </h2>
          <div className="text-lg text-muted-foreground space-y-4 leading-relaxed mb-8">
            <p className="text-center">
              Você deve estar se perguntando: "Como um curso presencial com certificado pode custar
              apenas R$ 10?"
            </p>
            <p className="font-semibold text-primary text-xl text-center">
              A resposta é simples: nossa missão é DEMOCRATIZAR o autoconhecimento.
            </p>
            <p className="text-center">
              Queremos que VOCÊ tenha acesso a ferramentas poderosas de transformação,
              independente da sua situação financeira.
            </p>
            <p className="text-center">
              Este não é um curso qualquer pela internet. É uma experiência PRESENCIAL, com
              interação real, material físico e certificado reconhecido.
            </p>
            <p className="text-center">
              O investimento simbólico de R$ 10 garante seu compromisso e nossa capacidade de
              organizar o melhor evento possível.
            </p>
          </div>

            <div className="bg-card border-2 border-primary rounded-2xl p-8 text-center">
              <div className="flex justify-center gap-8 mb-6 flex-wrap">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Valor real do curso:</p>
                  <p className="text-3xl font-bold line-through text-muted-foreground">R$ 497</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Seu investimento hoje:</p>
                  <p className="text-4xl font-bold price-shine">R$ 10</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Economia:</p>
                  <p className="text-3xl font-bold text-primary">R$ 487</p>
                </div>
              </div>
              <p className="text-2xl font-bold price-shine">Sim, você está economizando 98%!</p>
            </div>

          <div className="mt-8 bg-card/50 border border-primary/30 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-center text-primary mb-6">
              📦 O QUE ESTÁ INCLUSO:
            </h3>
            <div className="grid md:grid-cols-2 gap-3 text-muted-foreground">
              {["✅ Curso Presencial Completo", "✅ Certificado de Conclusão Reconhecido", "✅ Café e networking", "✅ Suporte durante o evento", "✅ Acesso ao grupo exclusivo de alunos", "✅ Bônus surpresa no dia"].map((item, index) => <p key={index} className="flex items-center gap-2">
                  {item}
                </p>)}
            </div>
              <p className="text-center text-xl font-bold price-shine mt-6">TUDO ISSO POR R$ 10!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-6 md:py-8 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ⏰ ÚLTIMAS VAGAS DISPONÍVEIS!
          </h2>
          <p className="text-xl text-primary font-semibold mb-8">
            Não Perca Esta Oportunidade Única
          </p>
          <div className="text-lg text-muted-foreground space-y-4 mb-8 leading-relaxed">
            <p>Este é um evento presencial com vagas LIMITADAS.</p>
            <p>
              Quando acabarem as vagas, não haverá mais oportunidade de participar nesta turma por
              esse valor promocional.
            </p>
            <p>A próxima turma (se houver) será pelo valor integral de R$ 497.</p>
            <div className="py-6 space-y-2">
              <p className="font-semibold text-primary text-xl">
                👉 Você está a APENAS 1 CLIQUE de transformar sua vida
              </p>
              <p className="font-semibold text-primary text-xl">
                👉 São apenas R$ 10 - menos que um almoço
              </p>
              <p className="font-semibold text-primary text-xl">
                👉 Risco ZERO e retorno INFINITO
              </p>
            </div>
            <p className="text-xl">
              A escolha é sua: continuar sem respostas ou descobrir seu verdadeiro propósito.
            </p>
          </div>

          <a href="#" onClick={(e) => {e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}>
            <button className="w-full max-w-md mx-auto h-16 text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
              🚀 SIM! QUERO GARANTIR MINHA VAGA AGORA
            </button>
          </a>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">✓ + de 500 alunos já transformaram suas vidas</p>
            <p className="flex items-center gap-2">✓ 98% de taxa de satisfação</p>
            <p className="flex items-center gap-2">
              ✓ Metodologia comprovada há mais de 10 anos
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-6 md:py-8 px-4 relative z-10">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            ❓ PERGUNTAS FREQUENTES
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-xl">
            Tire Suas Dúvidas Antes de Garantir Sua Vaga
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            <FAQItem value="faq-1" question="Nunca estudei numerologia. Este curso é para mim?" answer="SIM! Este curso foi desenvolvido especialmente para iniciantes. Você não precisa de conhecimento prévio. Vamos começar do zero e você sairá do evento já sabendo calcular e interpretar seu próprio mapa numerológico." />
            <FAQItem value="faq-2" question="Por que apenas R$ 10? Qual é a pegadinha?" answer="Não há pegadinha! Nossa missão é democratizar o autoconhecimento. O valor simbólico garante seu compromisso com o curso e cobre custos básicos de material. Queremos que o máximo de pessoas possam ter acesso a essa transformação." />
            <FAQItem value="faq-3" question="O certificado é reconhecido?" answer="Sim! Você receberá um certificado de conclusão emitido pelo Instituto DespertaMente, válido como comprovação de participação e aprendizado em Numerologia Pitagórica Sistêmica." />
            <FAQItem value="faq-4" question="Quando e onde será o curso?" answer="O curso será realizado no dia 07/03 (Sábado), com duas turmas: Manhã (09h às 12h) e Tarde (14h às 17h), presencial em Botafogo, Rio de Janeiro — Rua Teresa Guimarães, 185. As informações detalhadas serão enviadas imediatamente após sua inscrição, por WhatsApp e email." />
            <FAQItem value="faq-5" question="E se eu não puder comparecer depois de pagar?" answer="Entre em contato conosco com 48h de antecedência. Avaliaremos a possibilidade de transferir sua vaga para a próxima turma ou realizar o reembolso integral." />
            <FAQItem value="faq-6" question="Preciso levar algum material?" answer="Não! Todo material didático está incluso. Você só precisa levar você mesmo, com mente aberta e vontade de aprender. Recomendamos trazer uma garrafa de água e um caderno extra se quiser fazer anotações pessoais." />
            <FAQItem value="faq-7" question="Vou conseguir fazer cálculos numerológicos depois do curso?" answer="COM CERTEZA! O curso é 100% prático. Você vai calcular seu próprio mapa durante o evento e sairá de lá apto a calcular para outras pessoas. É aprender fazendo!" />
            <FAQItem value="faq-8" question="O pagamento é seguro?" answer="Absolutamente! Utilizamos a plataforma Cakto, uma das mais seguras do Brasil. Seus dados estão 100% protegidos e você receberá confirmação imediata do pagamento." />
          </Accordion>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex justify-center mb-6">
            <img alt="Instituto DespertaMente" className="h-16 w-auto" src="/lovable-uploads/b4dec95d-4969-4772-a141-d5494b0b2efc.png" />
          </div>
          <p className="text-xl font-semibold text-foreground">Instituto DespertaMente</p>
          <p className="text-muted-foreground">Transformando vidas através do autoconhecimento</p>

          <div className="space-y-2 text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              📧 contato@institutodespertamente.com.br
            </p>
            <p className="flex items-center justify-center gap-2">📱 WhatsApp: (11) 97537-9719</p>
            <p className="flex items-center justify-center gap-2">
              📍 Av. Presidente Wilson 165 - Centro  
            </p>
          </div>

          <div className="pt-6">
            <p className="text-muted-foreground mb-4">Siga-nos nas redes sociais:</p>
            <div className="flex justify-center gap-6">
              <a href="https://www.instagram.com/institutodespertamente/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                Instagram
              </a>
              <a href="https://www.facebook.com/institutodespertamente" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                Facebook
              </a>
              <a href="https://www.youtube.com/@institutodespertamente" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
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
    </div>;
};
export default Index;