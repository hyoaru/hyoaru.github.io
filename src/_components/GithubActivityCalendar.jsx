import React, { useMemo } from 'react'
import ActivityCalendar from 'react-activity-calendar'
import { Tooltip, select } from '@nextui-org/react'
import { Skeleton } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'

// App imports
import { useThemeContext } from '@context/ThemeContext'
import getGithubContributionStats from '@services/getGithubContributionStats'

export default function GithubActivityCalendar() {
  const { theme } = useThemeContext()

  const { data: { contributions } = {}, isLoading } = useQuery({
    queryKey: ['githubContribution'],
    queryFn: getGithubContributionStats,
  })

  const filteredContributions = useMemo(() => {
    return contributions
      ?.filter((contribution) => {
        const currentDate = new Date()
        // const currentDateSubtractedOneYear = dayjs(new Date()).subtract(1, 'year')
        const startDate = new Date('2022-01-02')
        const contributionDate = new Date(contribution.date)
        return contributionDate >= startDate && contributionDate <= currentDate
      })
      ?.sort((a, b) => new Date(a.date) - new Date(b.date))
  }, [contributions])


  const customTheme = {
    light: ['hsl(0, 0%, 92%)', '#12181c'],
    dark: ['hsl(0, 0%, 8%)', '#0070f0'],
    // light: ['#e5e7eb', '#595e61', '#595e61', '#595e61', '#595e61'],
    // dark: ['#3f3f46', '#0070f0', '#0070f0', '#0070f0', '#0070f0'],
  }

  function renderBlock(block, activity) {
    return (
      <Tooltip
        content={`${activity.count} activities on ${activity.date}`}
        classNames={{ content: 'text-xs' }}
        delay={0}
        closeDelay={0}
        showArrow
      >
        {block}
      </Tooltip>
    )
  }


  return (
    <>
      <Skeleton classNames={{ base: `w-full ${isLoading ? 'rounded-xl h-[140px] md:h-[180px]' : ''}` }} isLoaded={!isLoading}>
        <div className={`md:border md:rounded-xl md:dark:border-primary md:p-6`}>
          {filteredContributions && <>
            <ActivityCalendar
              data={filteredContributions}
              theme={customTheme}
              colorScheme={theme}
              style={{position: 'relative'}}
              renderBlock={renderBlock}
              fontSize={10}
              blockSize={10}
              hideTotalCount
            />
            <div className="absolute bottom-0 text-[10px] hidden sm:block md:bottom-6">Github contributions from 2022-01-01 - Present</div>
          </>}
        </div>
      </Skeleton>
    </>
  )
}
