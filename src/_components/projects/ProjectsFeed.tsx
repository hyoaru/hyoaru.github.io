import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from '@nextui-org/react';

// App imports
import ProjectCard from '@components/projects/ProjectCard';
import getProjects from '@services/projects/getProjects'

export default function ProjectsFeed() {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  })

  return useMemo(() => (
    <>
      {isLoading && [...Array(10).keys()].map((index) => {
        const randomHeightInPx = 200 + Math.floor(Math.random() * 100)
        return (
          <Skeleton
            key={`Skeleton-${index}`}
            style={{ width: '100%', height: `${randomHeightInPx}px` }}
            className={`rounded-xl`}
          />
        )
      })}

      {projects && projects.map((project, index) => (
        <ProjectCard
          key={`ProjectCard-${project.repositoryURL}`}
          isFromRight={index % 2 == 0}
          {...project}
        />
      ))}
    </>
  ), [projects, isLoading])
}
