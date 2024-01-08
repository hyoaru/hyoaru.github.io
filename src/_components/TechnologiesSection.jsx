import React from 'react'
import { Cpu } from 'lucide-react'
import { Skeleton } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'

// App imports
import getTechnologies from '@services/getTechnologies'
import TechnologyBadge from '@components/TechnologyBadge'

export default function TechnologiesSection() {
  const {data: technologies, isLoading} = useQuery({ queryKey: ['technologies'], queryFn: getTechnologies })

  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 xl:gap-12">
        <div className="col-span-12 md:col-span-4">
          <div className="border rounded-xl p-4 flex items-center justify-center gap-4 h-full">
            <Cpu className='text-primary' />
            <div className="">
              <p className='font-semibold text-xs md:text-base'>Languages & Technologies</p>
              <p className='text-[10px]'>Technologies I work and used to work with</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <Skeleton classNames={{ base: 'w-full h-full rounded-xl' }} isLoaded={!isLoading}>
            <div className="flex flex-wrap gap-1">
              {technologies?.map((technology) => (
                <TechnologyBadge key={`Technology-${technology.technologyName}`} technology={technology} />
              ))}
            </div>
          </Skeleton>
        </div>
      </div>
    </>
  )
}
