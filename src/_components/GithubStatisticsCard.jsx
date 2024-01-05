import React from 'react'
import { Skeleton } from '@nextui-org/react'

export default function GithubStatisticsCard(props) {
  const { label, value, isLoading, isError } = props
  return (
    <>
      <Skeleton isLoaded={!isLoading} classNames={{base: 'w-full h-full', content: 'flex rounded-xl w-full h-full'}}>
        <div className=" text-center border rounded-xl flex flex-col justify-center align-center w-full h-full md:py-4 dark:bg-foreground dark:text-background">
          <p className="font-semibold md:text-sm lg:text-lg">{isLoading || isError ? '-' : value}</p>
          <p className="text-xs md:text-[8px] lg:text-[10px]">{label}</p>
        </div>
      </Skeleton>
    </>
  )
}
