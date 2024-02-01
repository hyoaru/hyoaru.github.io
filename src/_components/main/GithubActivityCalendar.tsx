import React, { useMemo } from 'react'
import ActivityCalendar from 'react-activity-calendar'
import { Tooltip } from '@nextui-org/react'
import { Skeleton } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { memo } from 'react';

// App imports
import { useThemeContext } from '@context/ThemeContext'
import getGithubContributionStats from '@services/main/getGithubContributionStats'

const GithubActivityCalendar = memo(function _GithubActivityCalendar() {
  const { theme } = useThemeContext()

  const { data: { contributions } = {}, isLoading } = useQuery({
    queryKey: ['githubContribution'],
    queryFn: getGithubContributionStats,
  })

  const filteredContributions = useMemo(() => {
    return contributions
      ?.filter((contribution) => {
        const currentDate = new Date()
        const startDate = new Date('2022-01-02')
        const contributionDate = new Date(contribution.date)
        return contributionDate >= startDate && contributionDate <= currentDate
      })
      ?.sort((a, b) => (new Date(a.date) as any) - (new Date(b.date) as any))
  }, [contributions])


  const customTheme = {
    light: ['hsl(0, 0%, 92%)', '#12181c'],
    dark: ['hsl(0, 0%, 8%)', '#0070f0'],
  }

  function renderBlock(block: React.ReactNode, activity: any) {
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
              style={{ position: 'relative' }}
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
});

export default GithubActivityCalendar;