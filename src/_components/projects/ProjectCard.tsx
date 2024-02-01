import { Image, Button } from "@nextui-org/react";
import { Github, Globe, Settings2 } from 'lucide-react';

// App imports
import { ProjectType } from "@constants/main/types";
import AnimationSlideOnShow from "@animations/AnimationSlideOnShow";
import { useState } from "react";

type ProjectCardProps = ProjectType & {
  isFromRight: boolean
}

export default function ProjectCard({
  title,
  description,
  repositoryURL,
  liveURL,
  processURL,
  image,
  isFromRight
}: ProjectCardProps) {
  const [isFullImageShown, setIsFullImageShown] = useState(false)

  function showFullImage() {
    setIsFullImageShown(true)
  }

  function hideFullImage() {
    setIsFullImageShown(false)
  }

  return (
    <>
      <div className="break-inside-avoid-column">
        <AnimationSlideOnShow isFromRight={isFromRight}>
          <div className="border rounded-xl bg-background w-full overflow-hidden relative">
            <div
              className={`absolute z-20 bg-center bg-cover w-full h-full opacity-0 pointer-events-none transition-all ease-in-out duration-1000  ${isFullImageShown && 'opacity-100'}`}
              style={{ backgroundImage: `url(${image})` }}
            >
              <Image
                radius={'none'}
                src={image}
                classNames={{
                  wrapper: 'object-scale-down h-full mx-auto backdrop-blur-[12px]',
                  img: 'object-scale-down h-full mx-auto backdrop-blur-[12px]'
                }}
              />
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-12 sm:col-span-6">
                <div className="flex h-full w-full p-8">
                  <div className="my-auto w-full">
                    <div className="space-y-2">
                      <p className="font-bold text-sm md:text-base">{title}</p>
                      <p className="text-[10px] md:text-xs">{description}</p>
                    </div>
                    <div className="mt-8 flex gap-2 flex-wrap">
                      <a href={repositoryURL} target='_blank'>
                        <Button
                          size='sm'
                          color='primary'
                          startContent={<Github size={15} />}
                          className='!text-[10px] !p-2'
                        >
                          See repository
                        </Button>
                      </a>
                      {liveURL && <>
                        <a href={liveURL} target='_blank'>
                          <Button
                            size='sm'
                            variant={'flat'}
                            startContent={<Globe size={15} />}
                            className='!text-[10px] !p-2'
                          >
                            See live
                          </Button>
                        </a>
                      </>}
                      {processURL && <>
                        <a href={processURL} target='_blank'>
                          <Button
                            size='sm'
                            variant={'flat'}
                            startContent={<Settings2 size={15} />}
                            className='!text-[10px] !p-2'

                          >
                            See process
                          </Button>
                        </a>
                      </>}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-span-12 sm:col-span-6"
                onMouseEnter={showFullImage}
                onMouseLeave={hideFullImage}
                onTouchStart={showFullImage}
              >
                <Image
                  radius={'none'}
                  src={image}
                  classNames={{
                    wrapper: 'object-cover h-full',
                    img: 'h-full object-cover'
                  }}
                />
              </div>
            </div>
          </div>
        </AnimationSlideOnShow>
      </div>
    </>
  )
}
