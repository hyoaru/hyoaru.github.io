import { useProfileActions } from "@/infrastructure/hooks/profile";
import { ScrollShadow } from "@heroui/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ProjectCard } from "./project-card";

export const ProjectPanel = () => {
  const { getProjects } = useProfileActions();
  const { data } = useSuspenseQuery(getProjects());
  const projects = [...data].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="flex h-full min-h-0 flex-col space-y-2.5">
      <div className="h-fit shrink-0">
        <p className="pb-2.5 lg:text-xl">
          A collection of software projects from my{" "}
          <span className="text-accent font-bold">personal</span> and{" "}
          <span className="text-accent font-bold">professional</span>{" "}
          work over the years—spanning{" "}
          <span className="text-accent font-bold">fullstack engineering</span>,{" "}
          <span className="text-accent font-bold">cloud-native systems</span>,
          and{" "}
          <span className="text-accent font-bold">developer tooling</span>—built
          with a focus on{" "}
          <span className="text-accent font-bold">clean architecture</span> and{" "}
          <span className="text-accent font-bold">maintainable code</span>.
        </p>
      </div>

      <ScrollShadow hideScrollBar className="h-full min-h-0">
        <div className="grid grow grid-cols-1 gap-2.5 sm:grid-cols-2">
          {projects.map((project) => {
            return <ProjectCard key={`project-${project.title}`} {...project} />;
          })}
        </div>
      </ScrollShadow>
    </div>
  );
};
