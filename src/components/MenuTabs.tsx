import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExperienceData } from "@/config/experience";
import { PROJECTS, type Project } from "@/config/projects";
import { TechnologyBadge } from "@/components/TechnologyBadge";

const WORK_EXPERIENCE_TAB = "work-experience";
const PROJECTS_TAB = "projects";

// Helper function to parse text and convert URLs to links
function parseTextWithLinks(text: string): React.ReactNode[] {
  const urlRegex = /(https?:\/\/[^\s,]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:text-yellow-400 hover:underline"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="flex flex-col">
          {(project.hackathon || project.winner) && (
            <div className="mb-1 flex flex-wrap items-center gap-2">
              {project.hackathon && (
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {project.hackathon}
                </span>
              )}
              {project.winner && (
                <span className="inline-flex items-center gap-1 rounded bg-winner px-2 py-1 text-xs font-semibold uppercase tracking-wider text-winner-foreground">
                  <svg
                    aria-hidden="true"
                    className="h-3 w-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                  Winner
                </span>
              )}
            </div>
          )}
          <h2 className="text-lg font-semibold text-primary">
            {project.name}
          </h2>
        </div>
        {project.link && (
          <svg
            aria-hidden="true"
            className="mt-1 h-4 w-4 shrink-0 text-muted-foreground"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M7 17 17 7" />
            <path d="M7 7h10v10" />
          </svg>
        )}
      </div>
      <p className="font-sans text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
    </>
  );

  const className =
    "block rounded-lg border-b border-border px-3 py-6 last:border-b-0" +
    (project.link
      ? " transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      : "");

  return project.link ? (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={className}>
      {content}
    </a>
  ) : (
    <article className={className}>{content}</article>
  );
}

export function MenuTabs() {
  const [activeTab, setActiveTab] = React.useState(WORK_EXPERIENCE_TAB);

  React.useEffect(() => {
    const syncTabFromUrl = () => {
      const tab = new URL(window.location.href).searchParams.get("tab");
      setActiveTab(
        tab === PROJECTS_TAB ? PROJECTS_TAB : WORK_EXPERIENCE_TAB,
      );
    };

    syncTabFromUrl();
    window.addEventListener("popstate", syncTabFromUrl);
    return () => window.removeEventListener("popstate", syncTabFromUrl);
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value);

    const url = new URL(window.location.href);
    if (value === PROJECTS_TAB) {
      url.searchParams.set("tab", PROJECTS_TAB);
    } else {
      url.searchParams.delete("tab");
    }
    window.history.pushState({}, "", url);
  };

  return (
    <>
      <div className="rounded-xl border border-border/50 bg-background/80 backdrop-blur-xs p-6">
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full z-10">
          <TabsList className="grid h-11 w-full grid-cols-2 md:h-12">
            <TabsTrigger
              value={WORK_EXPERIENCE_TAB}
              className="h-full text-xs font-bold">
              Work Experience
            </TabsTrigger>
            <TabsTrigger
              value={PROJECTS_TAB}
              className="h-full text-xs font-bold">
              Projects
            </TabsTrigger>
          </TabsList>
          <TabsContent value={WORK_EXPERIENCE_TAB} className="mt-4">
            {ExperienceData.flatMap((section) => section.projects).map((project) => (
                <div key={project.name} className="border-b border-border py-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                    <div className="flex items-start gap-3">
                      {project.logo && (
                        <img
                          src={project.logo}
                          alt={`${project.name} logo`}
                          className="h-8 w-8 shrink-0 rounded-lg object-contain"
                          loading="lazy"
                        />
                      )}
                      <div>
                        <h2 className="text-xl font-bold">{project.name}</h2>
                        <p className="text-primary font-medium">{project.role}</p>
                        {project.location && (
                          <p className="text-xs text-muted-foreground">{project.location}</p>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium mt-1 sm:mt-0">{project.period}</p>
                  </div>
                  <p className="font-sans text-sm text-foreground mb-4">
                    {project.description}
                  </p>

                  {project.achievements && project.achievements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 text-primary">Key Achievements:</h4>
                      <ul className="space-y-3">
                        {project.achievements.map((achievement, index) => (
                          <li key={index} className="font-sans text-xs text-muted-foreground flex items-start">
                            <span className="mr-2 text-primary">•</span>
                            <span>{parseTextWithLinks(achievement)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-3">
                    <h4 className="text-sm font-semibold mb-2 text-primary">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <TechnologyBadge key={tech} technology={tech} />
                      ))}
                    </div>
                  </div>

                  {project.links && (
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-primary">Links:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.links.map((link, index) => (
                          <a key={index} href={link} target="_blank" rel="noopener noreferrer"
                             className="inline-flex min-h-11 items-center rounded bg-primary/10 px-3 text-xs text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                            {link.includes('web.archive.org') && link.includes('procureezy.com')
                              ? 'procureezy.com'
                              : (project.name === 'CocktailAndDinner' || link.includes('contra.com'))
                              ? link.replace('https://', '')
                              : link.replace('https://', '').split('/')[0]
                            }
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
            ))}
          </TabsContent>
          <TabsContent value={PROJECTS_TAB} className="mt-4">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
