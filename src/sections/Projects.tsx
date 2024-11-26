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
                className="h-[280px]"
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
                className="h-[280px]"
              />
            ))}
        </div>
      </>
    );

  return (
    <>
      <div className="space-y-4">
        {data?.map((project) => (
          <>
            <ProjectCard key={`'ProjectCard-${project.title}`}>
              <ProjectCard.Body>
                <ProjectCard.Image imageUrl={project.image} />
                <ProjectCard.Content>
                  <ProjectCard.ContentBody>
                    <ProjectCard.Title
                      title={project.title}
                      year={project.year}
                    />
                    <div className="space-y-4 mb-4">
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
          </>
        ))}
      </div>
    </>
  );
}
