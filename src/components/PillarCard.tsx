import { ReactNode } from "react";

interface PillarCardProps {
  icon: string;
  title: string;
  subtitle: string;
  items: string[];
  footer: string;
}

export const PillarCard = ({ icon, title, subtitle, items, footer }: PillarCardProps) => {
  return (
    <div className="bg-card border-2 border-primary/20 rounded-xl p-8 transition-all duration-400 hover-lift relative overflow-hidden group"
      style={{
        background: 'linear-gradient(135deg, hsla(var(--primary) / 0.1) 0%, hsla(var(--hero-gradient-end) / 0.5) 100%)'
      }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsla(var(--primary) / 0.1) 0%, transparent 70%)'
        }}
      />
      <div className="text-5xl mb-4 text-center relative z-10" style={{
        filter: 'drop-shadow(0 4px 12px hsla(var(--primary) / 0.4))',
        animation: 'pulse 2s ease-in-out infinite'
      }}>{icon}</div>
      <h3 className="text-2xl font-bold text-foreground mb-2 text-center relative z-10">{title}</h3>
      <p className="text-primary font-semibold mb-4 text-center text-lg relative z-10">{subtitle}</p>
      <ul className="space-y-3 mb-6 relative z-10">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-muted-foreground">
            <span className="text-primary mt-1">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="pt-4 border-t border-border relative z-10">
        <p className="text-sm text-muted-foreground italic text-center">{footer}</p>
      </div>
    </div>
  );
};
