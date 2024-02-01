import { Info } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from '@nextui-org/react'

// App imports
import BentoBox from '@components/about/BentoBox'
import getFieldInterests from '@services/about/getFieldInterests'
import FieldInterestCard from '@components/about/FieldInterestCard'
import getSocials from '@services/about/getSocials'
import SocialCard from '@components/about/SocialCard'

export default function AboutSection() {
  const { data: fieldInterests, isLoading: interestIsLoading } = useQuery({
    queryKey: ['fieldInterests'],
    queryFn: getFieldInterests
  })

  const { data: socials, isLoading: socialsIsLoading } = useQuery({
    queryKey: ['socials'],
    queryFn: getSocials
  })

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 space-y-4">
      <BentoBox className='dark:bg-foreground dark:text-background group '>
        <div className="flex items-center gap-4 ">
          <Info size={35} className='group-hover:text-primary transition-all duration-300 ease-in-out' />
          <div className="">
            <p className="text-sm md:text-base font-bold lg:text-lg">{"More about me"}</p>
            <p className='text-xs md:text-sm'>{"Because why not?"}</p>
          </div>
        </div>
      </BentoBox>

      <BentoBox className='dark:bg-foreground dark:text-background '>
        <div className="">
          <p className='text-sm'>
            Hailing from the Philippines, I am 21 years old and currently in my 3nd year of college studying under the program of Bachelor of Science in Computer Science.
            <span className='font-semibold'>{' Being someone with almost unsatiable curiosity, '}</span>
            I have quite the knack for studying topics that is subject even outside the field of computer science, such as society, linguistics, mathematics
            <span className='opacity-50'>─which I suck at, </span>
            and some other fields.
          </p>
        </div>
      </BentoBox>

      {interestIsLoading && [...Array(10).keys()].map((index) => {
        const randomHeightInPx = 150 + Math.floor(Math.random() * 100)
        return (
          <Skeleton
            key={`IntersestSkeleton-${index}`}
            style={{ width: '100%', height: `${randomHeightInPx}px` }}
            className={`rounded-xl`}
          />
        )
      })}

      {socialsIsLoading && [...Array(10).keys()].map((index) => {
        const randomHeightInPx = 50 + Math.floor(Math.random() * 100)
        return (
          <Skeleton
            key={`SocialsSkeleton-${index}`}
            style={{ width: '100%', height: `${randomHeightInPx}px` }}
            className={`rounded-xl`}
          />
        )
      })}

      {fieldInterests && fieldInterests.map((fieldInterest, index) => (
        <FieldInterestCard
          key={`FieldInterestCard-${index}`}
          {...fieldInterest}
        />
      ))}

      <div className="flex flex-wrap gap-4">
        {socials && socials.map((social, index) => (
          <SocialCard
            key={`SocialCard-${index}`}
            {...social}
          />
        ))}
      </div>
    </div>
  )
}