import * as React from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExperienceData } from "@/config/experience";
import { TechnologyBadge } from "@/components/TechnologyBadge";

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
          </TabsList>
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
