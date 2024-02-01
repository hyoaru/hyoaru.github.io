import { useQuery } from '@tanstack/react-query'
import { FolderGit2 } from 'lucide-react';
import { Skeleton } from '@nextui-org/react';

// App imports
import ProjectCard from '@components/projects/ProjectCard';
import getProjects from '@services/projects/getProjects'
import { EvervaultCard } from '@components/ui/EvervaultCard';

export default function ProjectsSection() {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  })

  return (
    <>
      <div className="columns-1 space-y-4 lg:columns-2">
        <div className="border rounded-xl break-inside-avoid-colum w-full overflow-hidden dark:border-primary">
          <EvervaultCard>
            <div className="flex items-center gap-4 p-10 text-foreground dark:text-primary">
              <FolderGit2 size={35} className='' />
              <div className="">
                <p className="text-sm font-bold md:text-lg">{"Projects I have worked on"}</p>
                <p className='text-xs md:text-sm'>{"Solo projects I've done along with some collaborative ones"}</p>
              </div>
            </div>
          </EvervaultCard>
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
