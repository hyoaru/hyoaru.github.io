import { useMemo } from 'react'
import { Cpu } from 'lucide-react'
import { Skeleton } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'

// App imports
import Marquee from '@components/ui/Marquee'
import getTechnologies from '@services/main/getTechnologies'
import TechnologyBadge from '@components/main/TechnologyBadge'
import { Button as MovingBorder } from '@components/ui/MovingBorder'
import divideArrayToSubArray from '@libraries/divideArrayToSubarray'

export default function TechnologiesCardGroup() {

  const { data: technologies, isLoading } = useQuery({
    queryKey: ['technologies'],
    queryFn: getTechnologies
  })

  const dividedTechnologies = useMemo(() => {
    if (!technologies) return
    return divideArrayToSubArray({
      array: technologies,
      subArrayCount: 2
    })
  }, [technologies])

  return (
    <>
      <div className="grid grid-cols-12 gap-4 lg:gap-8">
        <div className="col-span-12 md:col-span-6 xl:col-span-5">
          <MovingBorder
            borderRadius="0.75rem"
            className="bg-white w-full dark:bg-background text-black dark:text-white border-neutral-200 dark:border-slate-800"
            disabled
          >
            <div className="p-5 flex items-center gap-4 w-full h-full">
              <Cpu className='text-primary' size={30} />
              <div className="text-start">
                <p className='font-semibold text-xs md:text-sm dark:text-primary'>Languages & Technologies</p>
                <p className='text-xs'>Technologies I work and used to work with</p>
              </div>
            </div>
          </MovingBorder>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-7">
          <Skeleton classNames={{ base: `w-full h-full ${isLoading && 'rounded-xl'}`, content: 'w-full h-full' }} isLoaded={!isLoading}>
            <div className="hidden md:flex h-full">
              <div className="my-auto w-full space-y-2">
                {dividedTechnologies && dividedTechnologies?.map((technologyGroup, index) => (
                  <Marquee
                    direction={index % 2 == 0 ? 'right' : 'left'}
                    key={`TechnologyGroup-${index}`}
                  >
                    {technologyGroup.map((technology) => (
                      <div className="mx-1" key={`Technology-${technology.name}`}>
                        <TechnologyBadge {...technology} />
                      </div>
                    ))}
                  </Marquee>
                ))}
              </div>
            </div>

            <div className="block md:hidden">
              <Skeleton classNames={{ base: `w-full h-full ${isLoading && 'rounded-xl'}`, content: `w-full ${isLoading && 'h-[25px]'}` }} isLoaded={!isLoading}>
                <Marquee direction='left'>
                  {technologies && technologies?.map((technology) => (
                    <div className="mx-1" key={`TechnologyMarquee-${technology.name}`}>
                      <TechnologyBadge {...technology} />
                    </div>
                  ))}
                </Marquee>
              </Skeleton>
            </div>

          </Skeleton>
        </div>
      </div>
    </>
  )
}