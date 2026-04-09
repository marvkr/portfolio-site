import * as React from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExperienceData } from "@/config/experience";
import { PROJECTS } from "@/config/projects";
import { TechnologyBadge } from "@/components/TechnologyBadge";

const PROJECTS_TAB = "PROJECTS/HACKATHONS";

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

export function MenuTabs() {
  return (
    <>
      <div className="rounded-xl border border-border/50 bg-background/80 backdrop-blur-xs p-6">
        <Tabs
          defaultValue={ExperienceData[0].title}
          className="w-full z-10">
          <TabsList>
            {ExperienceData.map((section) => (
              <TabsTrigger
                key={section.title}
                value={section.title}
                className="font-bold text-xs">
                {section.title}
              </TabsTrigger>
            ))}
            <TabsTrigger
              key={PROJECTS_TAB}
              value={PROJECTS_TAB}
              className="font-bold text-xs">
              {PROJECTS_TAB}
            </TabsTrigger>
          </TabsList>
          <TabsContent key={PROJECTS_TAB} value={PROJECTS_TAB} className="mt-4">
            {PROJECTS.map((project) => {
              const CardWrapper = ({ children }: { children: React.ReactNode }) =>
                project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border-b border-border py-6 hover:bg-foreground/5 transition-colors">
                    {children}
                  </a>
                ) : (
                  <div className="border-b border-border py-6">{children}</div>
                );

              return (
                <CardWrapper key={project.name}>
                  <div className="flex flex-col gap-1 mb-2">
                    {(project.hackathon || project.winner) && (
                      <div className="flex flex-wrap items-center gap-2">
                        {project.hackathon && (
                          <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                            {project.hackathon}
                          </span>
                        )}
                        {project.winner && (
                          <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold bg-primary text-primary-foreground px-1.5 py-0.5 rounded">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3 h-3"
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
                    <div className="flex items-start justify-between gap-2">
                      <h2 className="text-xl font-bold text-primary">
                        {project.name}
                      </h2>
                      {project.link && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-muted-foreground shrink-0 mt-1.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardWrapper>
              );
            })}
          </TabsContent>
          {ExperienceData.map((section) => (
            <TabsContent key={section.title} value={section.title} className="mt-4">
              {section.projects.map((project) => (
                <div key={project.name} className="border-b border-border py-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                    <div>
                      <h2 className="text-xl font-bold">{project.name}</h2>
                      <p className="text-primary font-medium">{project.role}</p>
                      {project.location && (
                        <p className="text-xs text-muted-foreground">{project.location}</p>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground font-medium mt-1 sm:mt-0">{project.period}</p>
                  </div>
                  <p className="text-sm text-foreground mb-4">
                    {project.description}
                  </p>

                  {project.achievements && project.achievements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 text-primary">Key Achievements:</h4>
                      <ul className="space-y-3">
                        {project.achievements.map((achievement, index) => (
                          <li key={index} className="text-xs text-muted-foreground flex items-start">
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
                             className="text-xs text-primary hover:underline bg-primary/10 px-2 py-1 rounded">
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
          ))}
        </Tabs>
      </div>
    </>
  );
}
