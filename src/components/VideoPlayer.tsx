import { useState } from "react";
import { Play } from "lucide-react";
import thumbnail from "@/assets/gallery/foto9.jpeg";

export const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full aspect-video rounded-2xl overflow-hidden border-2 border-primary/40 shadow-2xl relative bg-card">
      {!isPlaying ? (
        <button
          onClick={() => setIsPlaying(true)}
          className="w-full h-full relative group cursor-pointer"
          aria-label="Reproduzir vídeo"
        >
          <img
            src={thumbnail}
            alt="Clique para assistir o vídeo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4">
            <div className="w-14 h-14 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(234,179,8,0.4)] group-hover:scale-110 transition-transform duration-300">
              <Play className="w-7 h-7 md:w-10 md:h-10 text-primary-foreground ml-0.5" fill="currentColor" />
            </div>
            <div className="text-center mt-1">
              <p className="text-white font-bold text-sm md:text-2xl drop-shadow-lg leading-tight">
                ▶ ASSISTA ANTES DE SE INSCREVER
              </p>
              <p className="text-white/80 text-xs md:text-base mt-1 font-medium">
                Descubra o que te espera nessa experiência transformadora
              </p>
            </div>
          </div>
        </button>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/enYdWdV5zGM?si=rla4PapIkCbys1Ys&controls=0&autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0"
        />
      )}
    </div>
  );
};
