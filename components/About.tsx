import FadeInSection from "@/components/FadeInSection";
import { portfolioData } from "@/lib/data";

export default function About() {
  return (
    <FadeInSection
      delay={0.1}
      className="rounded-2xl border border-white/10 bg-card/70 p-6 sm:p-8"
    >
      <h2 className="text-xl font-semibold text-text sm:text-2xl">About</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
        {portfolioData.name}님의 핵심 기술 스택입니다. 아래 항목은 `lib/data.ts`에서
        쉽게 수정할 수 있어 유지보수에 유리합니다.
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {portfolioData.coreStack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary sm:text-sm"
          >
            {tech}
          </li>
        ))}
      </ul>
    </FadeInSection>
  );
}
