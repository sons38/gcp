import { Github, Link as LinkIcon, Mail } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import { portfolioData } from "@/lib/data";

export default function Footer() {
  return (
    <FadeInSection
      delay={0.3}
      className="rounded-2xl border border-white/10 bg-card/70 p-6 sm:p-8"
    >
      <h2 className="text-xl font-semibold text-text sm:text-2xl">Contact</h2>
      <div className="mt-4 space-y-3 text-sm text-muted sm:text-base">
        <a
          href={`mailto:${portfolioData.contact.email}`}
          className="flex items-center gap-2 transition hover:text-text"
        >
          <Mail size={16} />
          {portfolioData.contact.email}
        </a>
        <a
          href={portfolioData.contact.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 transition hover:text-text"
        >
          <Github size={16} />
          GitHub
        </a>
        <a
          href={portfolioData.contact.blogOrLinkedIn}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 transition hover:text-text"
        >
          <LinkIcon size={16} />
          Blog / LinkedIn
        </a>
      </div>
      <p className="mt-6 text-xs text-muted/80">
        © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
      </p>
    </FadeInSection>
  );
}
