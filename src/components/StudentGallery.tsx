import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import foto1 from "@/assets/gallery/foto1.jpeg";
import foto2 from "@/assets/gallery/foto2.jpeg";
import foto3 from "@/assets/gallery/foto3.jpeg";
import foto4 from "@/assets/gallery/foto4.jpeg";
import foto5 from "@/assets/gallery/foto5.jpeg";
import foto6 from "@/assets/gallery/foto6.jpeg";
import foto7 from "@/assets/gallery/foto7.jpeg";
import foto8 from "@/assets/gallery/foto8.jpeg";
import foto9 from "@/assets/gallery/foto9.jpeg";
import foto10 from "@/assets/gallery/foto10.jpeg";
import fotoSp1 from "@/assets/gallery-sp/foto1.jpeg";

import fotoSp3 from "@/assets/gallery-sp/foto3.jpeg";
import fotoSp4 from "@/assets/gallery-sp/foto4.jpeg";
import fotoSp5 from "@/assets/gallery-sp/foto5.jpeg";

const photos = [
  { src: fotoSp1, alt: "Turma completa com Rodrygo Murari" },
  
  { src: fotoSp3, alt: "Aluna com certificado ao lado de Rodrygo Murari" },
  { src: fotoSp4, alt: "Aluna com certificado ao lado de Rodrygo Murari" },
  { src: fotoSp5, alt: "Aluna com certificado ao lado de Rodrygo Murari" },
  { src: foto1, alt: "Alunas com certificado ao lado de Rodrygo Murari" },
  { src: foto2, alt: "Turma completa com certificados" },
  { src: foto3, alt: "Aluna com certificado ao lado de Rodrygo Murari" },
  { src: foto4, alt: "Aluna com certificado ao lado de Rodrygo Murari" },
  { src: foto5, alt: "Alunos com certificados" },
  { src: foto6, alt: "Turma completa reunida" },
  { src: foto7, alt: "Aluna com certificado ao lado de Rodrygo Murari" },
  { src: foto8, alt: "Aluna com certificado ao lado de Rodrygo Murari" },
  { src: foto9, alt: "Turma completa em sala de aula" },
  { src: foto10, alt: "Alunos durante o curso presencial" },
];

export const StudentGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openPhoto = (index: number) => setSelectedIndex(index);
  const closePhoto = () => setSelectedIndex(null);
  const prevPhoto = () => setSelectedIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null));
  const nextPhoto = () => setSelectedIndex((i) => (i !== null ? (i + 1) % photos.length : null));

  return (
    <section className="md:py-8 relative z-10 px-[15px] py-[5px]">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              📸 Nossos <span className="text-primary">Alunos em Ação</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Veja momentos reais das nossas turmas presenciais — alunos certificados e transformados!
            </p>

            {/* Video de depoimentos */}
            <div className="max-w-sm mx-auto mb-8">
              <div className="aspect-[9/16] w-full rounded-xl overflow-hidden border-2 border-primary/20 shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/b3Wkb1eNHzs"
                  title="Depoimentos de alunos"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                onClick={() => openPhoto(index)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-40 md:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={closePhoto}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute left-2 md:left-6 text-white/80 hover:text-white z-10"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <img
            src={photos[selectedIndex].src}
            alt={photos[selectedIndex].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute right-2 md:right-6 text-white/80 hover:text-white z-10"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          <button
            onClick={closePhoto}
            className="absolute top-4 right-4 text-white/80 hover:text-white"
          >
            <X className="h-8 w-8" />
          </button>
        </div>
      )}
    </section>
  );
};
