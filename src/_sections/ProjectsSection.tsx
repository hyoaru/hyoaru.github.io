import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Tabs, Tab, Image, Skeleton, Button } from "@nextui-org/react";
import { ChevronLeft, ChevronRight, FolderGit2, Github, Globe, Settings2 } from 'lucide-react';

// App imports
import getProjects from '@services/projects/getProjects'

export default function ProjectsSection() {
  const [selectedTab, setSelectedTab] = useState<any | undefined>('1');
  const { data: projects, isLoading} = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  })

  function nextTab() {
    if (selectedTab >= projects!.length - 1) return
    setSelectedTab((previous: string) => `${Number(previous) + 1}`)
  }

  function previousTab() {
    if (selectedTab <= 0) return
    setSelectedTab((previous: string) => `${Number(previous) - 1}`)
  }

  return (
    <>
      <div className="grid grid-cols-12 gap-4 lg:gap-8">
        <div className="col-span-12 md:col-span-8">
          <Skeleton isLoaded={!isLoading} classNames={{ content: 'w-full h-full space-y-4 md:space-y-0', base: 'flex rounded-xl w-full h-full' }}>
            <div className="border rounded-xl p-5 items-center gap-4 justify-center flex md:hidden dark:border-default">
              <FolderGit2 strokeWidth={2.5} className='text-primary' />
              <span className="font-semibold text-lg">Projects</span>
            </div>
            <div className="border rounded-xl relative p-3 dark:text-primary dark:border-default">
              <div className="absolute left-5 h-full flex items-center z-20 text-5xl">
                <ChevronLeft onClick={previousTab} className='w-[1em] h-[1em] cursor-pointer' />
              </div>
              <div className="absolute right-5 h-full flex items-center z-20 text-5xl">
                <ChevronRight onClick={nextTab} className='w-[1em] h-[1em] cursor-pointer' />
              </div>
              <div className="flex w-full flex-col px-2">
                <Tabs
                  selectedKey={selectedTab}
                  onSelectionChange={setSelectedTab}
                  variant={'light'}
                  classNames={{ tabList: 'hidden', panel: 'p-0' }}
                >
                  {projects && projects.map((project, index) => (
                    <Tab key={`${index}`} title={`${index}`}>
                      <Image
                        className={`w-full object-cover rounded-xl h-[350px]`}
                        src={project.image}
                        isBlurred
                      />
                    </Tab>
                  ))}
                </Tabs>
              </div>
            </div>
          </Skeleton>
        </div>
        <div className="col-span-12 md:col-span-4">
          <Skeleton isLoaded={!isLoading} classNames={{ content: 'w-full h-full space-y-4', base: 'flex rounded-xl w-full h-full' }}>
            <div className="border rounded-xl p-5 items-center gap-4 justify-center hidden md:flex dark:border-default">
              <FolderGit2 strokeWidth={2.5} className='text-primary' />
              <span className="font-semibold text-lg">Projects</span>
            </div>
            <div className="border rounded-xl p-5 dark:border-default">
              <div className="flex w-full flex-col">
                <Tabs
                  size='sm'
                  color='default'
                  variant={'light'}
                  selectedKey={selectedTab}
                  onSelectionChange={setSelectedTab}
                  classNames={{ tabList: 'hidden', panel: 'p-0' }}
                >
                  {projects && projects.map((project, index) => (
                    <Tab key={`${index}`} title={`${index}`}>
                      <div className="mt-0">
                        <div className="space-y-2">
                          <p className='font-bold text-lg'>{project.title}</p>
                          <p className='text-sm'>{project.description}</p>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <a href={project.repositoryURL} target='_blank'>
                            <Button
                              size='sm'
                              color={'primary'}
                              startContent={<Github size={18} />}
                            >
                              Go to repository
                            </Button>
                          </a>
                          {project.liveURL && <>
                            <a href={project.liveURL} target='_blank'>
                              <Button
                                size='sm'
                                variant={'flat'}
                                startContent={<Globe size={18} />}
                              >
                                See live
                              </Button>
                            </a>
                          </>}
                          {project.processURL && <>
                            <a href={project.processURL} target='_blank'>
                              <Button
                                size='sm'
                                variant={'flat'}
                                startContent={<Settings2 size={18} />}
                              >
                                See process
                              </Button>
                            </a>
                          </>}
                        </div>
                      </div>
                    </Tab>
                  ))}
                </Tabs>
              </div>
            </div>
          </Skeleton>
        </div>
      </div>
    </>
  )
}
