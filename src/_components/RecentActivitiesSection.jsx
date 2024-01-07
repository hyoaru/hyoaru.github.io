import React from 'react'
import { Skeleton } from '@nextui-org/react'
import { Activity, Github } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'

// App imports
import getLastFmRecentlyListenedTrack from '@services/getLastFmRecentlyListenedTrack'
import RecentlyListenedTrackCard from '@components/RecentlyListenedTrackCard'
import getGithubRecentCommit from '@/src/_services/getGithubRecentCommit'
import GithubRecentCommitCard from '@components/GithubRecentCommitCard'


export default function RecentActivitiesSection() {
  const lastfmRecentlyListenedTrack = useQuery({
    queryKey: ['lastfmRecentlyListenedTrack'],
    queryFn: getLastFmRecentlyListenedTrack,
    staleTime: 60 * 1000 * 3
  })

  const githubRecentCommit = useQuery({
    queryKey: ['githubRecentCommit'],
    queryFn: getGithubRecentCommit,
    staleTime: 60 * 1000 * 30
  })

  return (
    <>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-4 md:col-span-12">
          <Skeleton
            isLoaded={!lastfmRecentlyListenedTrack.isLoading || !githubRecentCommit.isLoading}
            classNames={{ content: 'w-full h-full', base: 'flex rounded-xl w-full h-full' }}
          >
            <div className="border rounded-xl w-full h-full dark:border-primary">
              <div className="py-4 px-2 flex flex-col items-center gap-2 justify-center w-full h-full md:flex-row ">
                <Activity className='text-primary md:text-foreground dark:text-primary' />
                <p className="text-xs text-center font-semibold lg:text-sm">
                  Recent Activities
                </p>
              </div>
            </div>
          </Skeleton>
        </div>

        <div className="col-span-4 order-last md:col-span-12 md:order-none">
          <RecentlyListenedTrackCard {...lastfmRecentlyListenedTrack} />
        </div>
        <div className="col-span-4 md:col-span-12">
          <GithubRecentCommitCard {...githubRecentCommit} />
        </div>

      </div>
    </>
  )
}
