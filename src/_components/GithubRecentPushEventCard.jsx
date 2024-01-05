import dayjs from 'dayjs'
import React from 'react'
import { Skeleton } from '@nextui-org/react'
import { Github } from 'lucide-react'

export default function GithubRecentPushEventCard(props) {
  const { recentPushEvent, isLoading, isError } = props
  const { repo: { name: repositoryName } = {}, payload: { commits } = {}, created_at: createdAt } = recentPushEvent
  const pushEventMessage = commits?.[commits.length - 1].message
  const dateCreatedFormatted = dayjs(createdAt).format('YYYY-MM-DD')

  return (
    <Skeleton isLoaded={!isLoading} classNames={{ content: 'h-full w-full', base: "rounded-xl flex h-full w-full" }}>
      <div className={`rounded-xl px-2 py-4 flex items-center w-full h-full mx:px-4 xl:p-4 dark:border-primary ${isError ? 'bg-danger' : 'border'}`}>
        <div className="hidden w-max xl:block">
          <div className="w-[60px] h-[60px] flex justify-center align-center bg-default rounded-xl">
            <Github className='w-1/2 h-1/2 my-auto text-primary' />
          </div>
        </div>
        <div className="w-full text-center xl:text-start xl:ms-4">
          <p className='text-[8px] font-light'>{isError ? 'Github' : `Github ･ ${dateCreatedFormatted}`}</p>
          <p className='text-xs font-semibold'>{isError ? 'An error has occurred' : pushEventMessage}</p>
          <p className='text-[10px] '>{repositoryName}</p>
        </div>
      </div>
    </Skeleton>
  )
}
