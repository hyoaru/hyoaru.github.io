import React from 'react'
import { Cpu } from 'lucide-react'
import { Skeleton } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import Marquee from 'react-fast-marquee'

// App imports
import getTechnologies from '@services/getTechnologies'
import TechnologyBadge from '@components/TechnologyBadge'
import { useThemeContext } from '@context/ThemeContext'

export default function TechnologiesSection() {
  const { theme } = useThemeContext()
  const { data: technologies, isLoading } = useQuery({ queryKey: ['technologies'], queryFn: getTechnologies })

  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 xl:gap-12">
        <div className="col-span-12 md:col-span-4">
          <div className="border rounded-xl p-4 flex items-center justify-center gap-4 h-full dark:border-transparent dark:bg-foreground dark:text-background">
            <Cpu className='' />
            <div className="">
              <p className='font-semibold text-xs md:text-base'>Languages & Technologies</p>
              <p className='text-[10px]'>Technologies I work and used to work with</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <Skeleton classNames={{ base: `w-full h-full ${isLoading ? 'rounded-xl' : ''}` }} isLoaded={!isLoading}>
            <div className="hidden md:flex flex-wrap gap-1">
              {technologies?.map((technology) => (
                <TechnologyBadge key={`Technology-${technology.technologyName}`} technology={technology} />
              ))}
            </div>
            
            <div className="block md:hidden">
              <Marquee
                className={'transition-all duration-1000 ease-in-out'}
                direction='right'
                speed={25}
                gradient={true}
                gradientColor={theme === 'light' ? 'white' : 'black'}
                gradientWidth={50}
                pauseOnHover
              >
                {technologies?.map((technology) => (
                  <div className="mx-1">
                    <TechnologyBadge key={`TechnologyMarquee-${technology.technologyName}`} technology={technology} />
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
