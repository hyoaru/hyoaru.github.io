import { Cpu } from 'lucide-react'
import { Skeleton } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'

// App imports
import Marquee from '@components/ui/Marquee'
import getTechnologies from '@services/main/getTechnologies'
import TechnologyBadge from '@components/main/TechnologyBadge'

export default function TechnologiesCardGroup() {

  const { data: technologies, isLoading } = useQuery({
    queryKey: ['technologies'],
    queryFn: getTechnologies
  })

  const dividedTechnologies = (() => {
    if (!technologies) return
    const midIndex = Math.ceil(technologies?.length / 2)
    return [technologies.slice(0, midIndex), technologies.slice(midIndex, technologies.length - 1)]
  })()

  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8">
        <div className="col-span-12 md:col-span-5 xl:col-span-4">
          <div className="rounded-xl bg-background p-4 flex items-center justify-center gap-4 h-full border dark:border-default">
            <Cpu className='text-primary' />
            <div className="">
              <p className='font-semibold text-xs md:text-sm dark:text-primary'>Languages & Technologies</p>
              <p className='text-[10px]'>Technologies I work and used to work with</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 xl:col-span-8">
          <Skeleton classNames={{ base: `w-full h-full ${isLoading && 'rounded-xl'}`, content: 'w-full h-full' }} isLoaded={!isLoading}>
            <div className="hidden md:flex h-full">
              <div className="my-auto w-full space-y-2">
                {dividedTechnologies && dividedTechnologies?.map((technologyGroup, index) => (
                  <Marquee direction={index % 2 == 0 ? 'right' : 'left'}>
                    {technologyGroup.map((technology) => (
                      <div className="mx-1">
                        <TechnologyBadge
                          key={`Technology-${technology.technologyName}`}
                          {...technology}
                        />
                      </div>
                    ))}
                  </Marquee>
                ))}
              </div>
            </div>

            <div className="block md:hidden">
              <Marquee>
                {technologies && technologies?.map((technology) => (
                  <div className="mx-1" key={`TechnologyMarquee-${technology.technologyName}`}>
                    <TechnologyBadge {...technology} />
                  </div>
                ))}
              </Marquee>
            </div>

          </Skeleton>
        </div>
      </div>
    </>
  )
}