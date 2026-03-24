import { FolderGit2 } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import { portfolioData } from "@/lib/data";

export default function Projects() {
  return (
    <FadeInSection delay={0.2}>
      <h2 className="text-xl font-semibold text-text sm:text-2xl">Projects</h2>
      <div className="mt-4 grid gap-4">
        {portfolioData.projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-white/10 bg-card/70 p-5"
          >
            <div className="flex items-start gap-3">
              <FolderGit2 className="mt-0.5 text-primary" size={18} />
              <div>
                <h3 className="text-base font-semibold text-text sm:text-lg">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {project.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <li
                      key={`${project.title}-${tech}`}
                      className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </FadeInSection>
  );
}
