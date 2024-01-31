import { Skeleton } from '@nextui-org/react'
import { Button as MovingBorder } from '@components/ui/MovingBorder'

type GithubStatisticsCardProps = {
  label: string
  value: number | undefined
  isLoading: boolean
  isError: boolean
}

export default function GithubStatisticsCard({ label, value, isLoading, isError }: GithubStatisticsCardProps) {
  return (
    <>
      <Skeleton isLoaded={!isLoading} classNames={{ content: 'w-full h-full', base: 'flex rounded-xl w-full h-full' }}>
        <MovingBorder
          borderRadius="0.75rem"
          className="bg-white w-full h-full dark:bg-background text-black dark:text-white border-neutral-200 dark:border-slate-800"
          disabled
        >
          <div className=" text-center bg-background rounded-xl flex flex-col justify-center align-center w-full h-full md:py-4 dark:bg-foreground dark:text-background">
            <p className="font-semibold md:text-sm lg:text-lg">{isLoading || isError ? '-' : value?.toLocaleString()}</p>
            <p className="text-xs md:text-[8px] lg:text-[10px]">{label}</p>
          </div>
        </MovingBorder>
      </Skeleton>
    </>
  )
}