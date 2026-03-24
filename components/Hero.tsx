import { Sparkles } from "lucide-react";
import { portfolioData } from "@/lib/data";
import FadeInSection from "@/components/FadeInSection";

export default function Hero() {
  return (
    <FadeInSection className="rounded-2xl border border-white/10 bg-card/70 p-6 backdrop-blur-sm sm:p-8">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary">
        <Sparkles size={14} />
        Frontend Portfolio
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
        {portfolioData.name}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
        {portfolioData.intro}
      </p>
      <p className="mt-3 text-sm text-primary">{portfolioData.role}</p>
    </FadeInSection>
  );
}
