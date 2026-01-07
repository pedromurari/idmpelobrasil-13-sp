import { Play, Star, X } from 'lucide-react';
import { useState } from 'react';

export const TestimonialsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "Aluno IDM",
      videoId: "ItN5HYo3WnY",
      embedUrl: "https://www.youtube.com/embed/ItN5HYo3WnY",
      quote: "A numerologia transformou completamente minha visão sobre mim mesmo."
    },
    {
      id: 2,
      name: "Aluno IDM",
      videoId: "7D8RIWBfsQA",
      embedUrl: "https://www.youtube.com/embed/7D8RIWBfsQA",
      quote: "O método do Rodrygo é único e muito prático."
    },
    {
      id: 3,
      name: "Aluno IDM",
      videoId: "0dr-2LRKfPk",
      embedUrl: "https://www.youtube.com/embed/0dr-2LRKfPk",
      quote: "Descobri meu propósito através dos números."
    },
    {
      id: 4,
      name: "Aluno IDM",
      videoId: "i52fixRZpgU",
      embedUrl: "https://www.youtube.com/embed/i52fixRZpgU",
      quote: "Curso incrível! Recomendo para todos."
    },
    {
      id: 5,
      name: "Aluno IDM",
      videoId: "QZxwaOXyhy8",
      embedUrl: "https://www.youtube.com/embed/QZxwaOXyhy8",
      quote: "Uma experiência transformadora que mudou minha vida."
    }
  ];

  const handleVideoClick = (embedUrl: string) => {
    setSelectedVideo(embedUrl);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="md:py-8 relative z-10 px-[15px] py-[5px]">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              O que dizem nossos <span className="text-primary">Alunos</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Histórias reais de transformação através do nosso curso de Numerologia.
            </p>
          </div>

          {/* Grid de depoimentos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-card/50 border border-primary/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-primary/40"
              >
                {/* Thumbnail do vídeo */}
                <div 
                  className="relative mb-4 group cursor-pointer"
                  onClick={() => handleVideoClick(testimonial.embedUrl)}
                >
                  <img 
                    src={`https://img.youtube.com/vi/${testimonial.videoId}/hqdefault.jpg`}
                    alt={testimonial.name}
                    className="w-full h-44 md:h-52 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-primary rounded-full p-4">
                      <Play className="h-8 w-8 text-primary-foreground fill-current" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-background/90 rounded-full px-3 py-1 flex items-center">
                    <Play className="h-3 w-3 text-primary mr-1" />
                    <span className="text-xs font-semibold text-foreground">Ver depoimento</span>
                  </div>
                </div>

                {/* Estrelas */}
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground mb-4 italic text-center text-sm">
                  "{testimonial.quote}"
                </blockquote>

                {/* Nome */}
                <div className="text-center">
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Segunda linha com 2 depoimentos centralizados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 max-w-3xl mx-auto">
            {testimonials.slice(3, 5).map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-card/50 border border-primary/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-primary/40"
              >
                {/* Thumbnail do vídeo */}
                <div 
                  className="relative mb-4 group cursor-pointer"
                  onClick={() => handleVideoClick(testimonial.embedUrl)}
                >
                  <img 
                    src={`https://img.youtube.com/vi/${testimonial.videoId}/hqdefault.jpg`}
                    alt={testimonial.name}
                    className="w-full h-44 md:h-52 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-primary rounded-full p-4">
                      <Play className="h-8 w-8 text-primary-foreground fill-current" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-background/90 rounded-full px-3 py-1 flex items-center">
                    <Play className="h-3 w-3 text-primary mr-1" />
                    <span className="text-xs font-semibold text-foreground">Ver depoimento</span>
                  </div>
                </div>

                {/* Estrelas */}
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground mb-4 italic text-center text-sm">
                  "{testimonial.quote}"
                </blockquote>

                {/* Nome */}
                <div className="text-center">
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal do vídeo */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative bg-card rounded-lg max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-foreground hover:text-muted-foreground transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="aspect-video">
              <iframe
                src={`${selectedVideo}?autoplay=1`}
                title="Depoimento"
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
