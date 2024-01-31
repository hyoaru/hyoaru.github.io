import dayjs from 'dayjs'
import { Skeleton } from '@nextui-org/react'
import { Github } from 'lucide-react'
import { GithubRecentCommitType } from '@constants/main/types'

type GithubRecentCommitCardProps = {
  data: GithubRecentCommitType | undefined
  isLoading: boolean
  isError: boolean
}

export default function GithubRecentCommitCard({ data, isLoading, isError }: GithubRecentCommitCardProps) {
  const { repository_name: repositoryName, commit_message: commitMessage, created_at: createdAt } = data || {}
  const dateCreatedFormatted = dayjs(createdAt).format('YYYY-MM-DD')

  if (isError) {
    return (
      <div className="h-full w-full rounded-xl relative bg-danger">
        <div className="absolute w-full h-full rounded-xl backdrop-blur-[12px] opacity-90"></div>
        <div className="flex w-full h-full items-center">
          <div className="w-full py-8 text-background text-center z-[2]">
            <p className="text-[8px]">{'Github'}</p>
            <p className="text-xs font-semibold">An error has occured.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Skeleton isLoaded={!isLoading} classNames={{ content: 'h-full w-full', base: "rounded-xl flex h-full w-full" }}>
      <div className={`rounded-xl bg-background px-4 py-6 flex items-center w-full h-full mx:px-4 xl:p-4 dark:border-primary border`}>
        <div className="hidden w-max xl:block">
          <div className="w-[60px] h-[60px] flex justify-center align-center bg-default rounded-xl">
            <Github className='w-1/2 h-1/2 my-auto text-primary' />
          </div>
        </div>
        <div className={`w-full text-center xl:text-start xl:ms-4 ${isLoading ? 'py-4' : ''}`}>
          <p className='text-[8px] font-light'>{`Github ･ ${dateCreatedFormatted}`}</p>
          <p className='text-xs font-semibold'>{commitMessage}</p>
          <div className="">
            <p className='text-[10px] break-words'>{repositoryName}</p>

          </div>
        </div>
      </div>
    </Skeleton>
  )
}