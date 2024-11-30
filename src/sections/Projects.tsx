import { ProjectCard } from "@/components/projects/ProjectCard";
import ErrorTile from "@/components/shared/ErrorTile";
import LoadingTile from "@/components/shared/LoadingTile";
import useCore from "@/hooks/useCore";

export default function Projects() {
  const { getProjects } = useCore();
  const { data, isLoading, error } = getProjects();

  if (isLoading)
    return (
      <>
        <div className="space-y-4">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <LoadingTile
                key={`ProjectCardLoadingComponent-${index}`}
                className="h-[280px] rounded-xl"
              />
            ))}
        </div>
      </>
    );

  if (error)
    return (
      <>
        <div className="space-y-4">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <ErrorTile
                key={`ProjectCardErrorComponent-${index}`}
                className="h-[280px] rounded-xl"
              />
            ))}
        </div>
      </>
    );

  return (
    <>
      <div className="sticky top-0 z-20 flex w-full justify-end p-2">
        <button className="group w-max rounded-lg border border-default bg-background px-3 py-1 font-mono text-sm uppercase opacity-80 transition-all duration-300 ease-in-out hover:scale-105">
          <p className="">
            {"Project count: "} {data?.length}
          </p>
        </button>
      </div>
      <div className="space-y-4">
        {data?.map((project) => (
          <ProjectCard key={`'ProjectCard-${project.title}`}>
            <ProjectCard.Body>
              <ProjectCard.Image imageUrl={project.image} />
              <ProjectCard.Content>
                <ProjectCard.ContentBody>
                  <ProjectCard.Title
                    title={project.title}
                    year={project.year}
                  />
                  <div className="mb-4 space-y-4">
                    <ProjectCard.Description>
                      {project.description}
                    </ProjectCard.Description>
                    <ProjectCard.ContentTags tags={project.tags} />
                  </div>
                </ProjectCard.ContentBody>
                <ProjectCard.ContentFooter>
                  <ProjectCard.RepositoryButton url={project.repositoryURL} />
                  <ProjectCard.ProcessButton url={project.processURL} />
                  <ProjectCard.LiveButton url={project.liveURL} />
                </ProjectCard.ContentFooter>
              </ProjectCard.Content>
            </ProjectCard.Body>
          </ProjectCard>
        ))}
      </div>
    </>
  );
}
