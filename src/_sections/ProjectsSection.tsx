import { useQuery } from '@tanstack/react-query'
import { FolderGit2 } from 'lucide-react';
import ProjectCard from '@components/projects/ProjectCard';
import { Skeleton } from '@nextui-org/react';

// App imports
import getProjects from '@services/projects/getProjects'

export default function ProjectsSection() {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  })

  return (
    <>
      <div className="columns-1 space-y-4 lg:columns-2">
        <div className="border p-10 rounded-xl bg-background break-inside-avoid-column w-full">
          <div className="flex items-center gap-4">
            <FolderGit2 size={35} />
            <div className="">
              <p className="text-lg font-bold">{"Projects I have worked on"}</p>
              <p className='text-sm'>{"Solo projects I've done along with some collaborative ones"}</p>
            </div>
          </div>
        </div>

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
      </div >
    </>
  )
}
