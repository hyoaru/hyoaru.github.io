import { Github } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from '@nextui-org/react'

// App imports
import getGithubContributionStats from '@services/main/getGithubContributionStats'
import GithubStatisticsCard from '@components/main/GithubStatisticsCard' 
import getGithubBaseUserInformation from '@services/main/getGithubBaseUserInformation'

export default function GithubStatisticsCardGroup() {
  const githubContribution = useQuery({
    queryKey: ['githubContribution'],
    queryFn: getGithubContributionStats,
  })

  const githubBaseUserInformation = useQuery({
    queryKey: ['githubBaseUserInformation'],
    queryFn: getGithubBaseUserInformation
  })

  return (
    <>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-4 sm:col-span-6  md:col-span-12">
          <Skeleton
            isLoaded={!githubContribution.isLoading || !githubBaseUserInformation.isLoading}
            classNames={{ content: 'w-full h-full', base: 'flex rounded-xl w-full h-full' }}
          >
            <div className="border rounded-xl py-4 px-1 flex flex-col items-center gap-2 justify-center w-full h-full md:flex-row dark:bg-foreground dark:text-background">
              <Github className='text-primary dark:text-background' />
              <p className="text-center text-xs font-semibold lg:text-sm">
                Github Stats
              </p>
            </div>
          </Skeleton>
        </div>
        <div className="col-span-4 sm:col-span-3 md:col-span-6">
          <GithubStatisticsCard
            value={githubContribution.data?.totalContribution}
            label={"Contributions"}
            {...githubContribution}
          />
        </div>
        <div className="col-span-4 sm:col-span-3 md:col-span-6">
          <GithubStatisticsCard
            value={githubBaseUserInformation.data?.public_repos}
            label={"Repositories"}
            {...githubBaseUserInformation}
          />
        </div>
      </div>
    </>
  )
}