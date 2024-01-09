import React from 'react'

import { ChevronDownCircle } from 'lucide-react'
import { Chip, Button, Image } from '@nextui-org/react'
import GithubStatisticsSection from '@components/GithubStatisticsSection'
import RecentActivitiesSection from '@components/RecentActivitiesSection'
import InterestsMarquee from '@components/InterestsMarquee'
import { interests } from '@constants/home'
import GithubActivityCalendar from '@components/GithubActivityCalendar'
import TechnologiesSection from '@components/TechnologiesSection'

export default function App() {

  return (
    <>
      <div className="mx-6 lg:mx-16 mt-12">
        <div id='MainSection' className="grid grid-cols-12 gap-4 lg:gap-8">
          <div className="col-span-12 flex gap-4 md:col-span-3 sm:gap-6 md:block md:gap-0">
            <div className="w-8/12 md:hidden">
              <Image isBlurred src='profile-image.jpg' className='w-max h-[300px] object-cover sm:h-[400px]' />
            </div>
            <div className="w-4/12 md:w-full">
              <div className="relative mt-2 leading-4 xs:leading-5 xs:mb-3 sm:mt-4 sm:mb-6 sm:leading-6 md:leading-normal md:mb-0">
                <span className='text-[8px] rounded-lg box-decoration-clone py-[6px] px-2 border bg-background xs:text-[10px] sm:text-xs md:block md:p-4 md:font-semibold dark:border-foreground md:dark:bg-foreground md:dark:text-background'>
                  An idiot sandwich from the Philippines.
                </span>
              </div>
              <div className="relative mt-4 z-[11] md:mt-6 md:absolute md:w-4/12 lg:mt-8">
                <span className='leading-normal px-3 text-[3.78vw] box-decoration-clone border py-[5px] bg-background text-primary rounded-xl md:text-lg lg:leading-9 lg:text-2xl xl:leading-10 xl:text-3xl dark:bg-primary dark:text-foreground'>
                  A programmer, graphic designer, layout artist, and a data scientist in the making.
                </span>
                <div className="hidden md:flex flex-wrap gap-x-2 gap-y-1 mt-6">
                  {interests.map((interest) => (
                    <Chip
                      key={`Interest-${interest}`}
                      color='primary'
                      variant='dot'
                      size='sm'
                      classNames={{ base: "border-1 bg-background", content: "text-[8px] md:text-[10px] lg:text-xs" }}
                    >
                      {interest}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="mt-56 md:mt-[17rem] min-[800px]:mt-[15rem] min-[850px]:mt-[14rem] lg:mt-[18.5rem] min-[1040px]:mt-[21rem] min-[1050px]:mt-[18rem] 2xl:mt-[16rem]">
                <p className='text-xs min-[800px]:text-sm'>
                  <span className='font-bold'>Jenjade Cabrera.</span>
                  {' A third year washed up computer science student.'}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <Button color='primary' size='sm'>Get in touch</Button>
                <Button variant={'ghost'} size='sm'>Download</Button>
              </div>
            </div>
          </div>

          <div className="col-span-12 mt-2 md:hidden">
            <InterestsMarquee interests={interests} />
          </div>

          <div className="col-span-12 block md:hidden mt-4">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-4">
                <div className="flex flex-col gap-2">
                  <Button color='primary' size='sm'>Get in touch</Button>
                  <Button variant={'ghost'} size='sm'>Download</Button>

                </div>
              </div>
              <div className="col-span-8">
                <div className="border rounded-lg px-4 py-2 h-full flex flex-col align-center justify-center">
                  <p className='text-base font-bold'>Jenjade Cabrera</p>
                  <p className='text-xs'>
                    {' A third year washed up computer science student'}
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="hidden col-span-12 md:block md:col-span-6">
            <Image
              isBlurred
              src="/profile-image.jpg"
              className='w-full h-[450px] object-top object-cover rounded-xl'
            />
          </div>

          <div className="col-span-12 md:col-span-3 space-y-4 mt-4">
            <div className="">
              <GithubStatisticsSection />
            </div>

            <div className="">
              <RecentActivitiesSection />
            </div>
          </div>
        </div>

        <div className="w-4/12 mx-auto my-20 sm:w-3/12 lg:w-2/12">
          <a href="#">
            <Button variant='light' className='border w-full md:p-6'>
              <div className="text-xs flex items-center justify-center gap-4 animate-pulse md:text-base">
                <ChevronDownCircle strokeWidth={1} className='hidden md:block' />
                <span className=''>Scroll down</span>
              </div>
            </Button>
          </a>
        </div>

        <div className="">
          <TechnologiesSection />
        </div>

        <div className="mt-10">
          <GithubActivityCalendar />
        </div>

      </div>
      <p className="text-center font-bold opacity-50 mt-20">{'[ in progress ]'}</p>
      <div className="h-[100rem]"></div>
    </>
  )
}
