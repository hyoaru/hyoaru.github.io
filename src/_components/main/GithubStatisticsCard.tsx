import { Skeleton } from '@nextui-org/react'

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
        <div className=" text-center bg-background border rounded-xl flex flex-col justify-center align-center w-full h-full md:py-4 dark:bg-foreground dark:text-background">
          <p className="font-semibold md:text-sm lg:text-lg">{isLoading || isError ? '-' : value?.toLocaleString()}</p>
          <p className="text-xs md:text-[8px] lg:text-[10px]">{label}</p>
        </div>
      </Skeleton>
    </>
  )
}