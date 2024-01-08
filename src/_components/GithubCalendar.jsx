import React from 'react'
import ActivityCalendar from 'react-activity-calendar'
import { Tooltip, select } from '@nextui-org/react'
import { Skeleton } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'

// App imports
import { useThemeContext } from '@context/ThemeContext'
import getGithubContributionStats from '@services/getGithubContributionStats'

export default function GithubCalendar() {
  const { theme } = useThemeContext()

  const { data: { contributions } = {} , isLoading} = useQuery({
    queryKey: ['githubContribution'],
    queryFn: getGithubContributionStats,
  })

  const filteredContributions = contributions
    ?.filter((contribution) => {
      const currentDate = new Date()
      const currentDateSubtractedOneYear = dayjs(new Date()).subtract(1, 'year')
      const startDate = new Date('2022-01-02')
      const contributionDate = new dayjs(contribution.date)
      return contributionDate >= startDate && contributionDate <= currentDate
    })
    ?.sort((a, b) => new Date(a.date) - new Date(b.date))

  const customTheme = {
    light: ['#e5e7eb', '#595e61', '#595e61', '#595e61', '#595e61'],
    dark: ['#3f3f46', '#0070f0', '#0070f0', '#0070f0', '#0070f0'],
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
      <Skeleton classNames={{ base: 'rounded-xl' }} isLoaded={!isLoading}>
        <div className={`border rounded-xl p-6 ${isLoading ? 'h-[175px]' : ''}`}>
          {filteredContributions && <>
            <ActivityCalendar
              data={filteredContributions}
              theme={customTheme}
              colorScheme={theme}
              renderBlock={renderBlock}
              fontSize={10}
              blockSize={10}
              hideColorLegend
              hideTotalCount
            />
          </>}
          <p className="text-xs mt-4">Github contributions from January 1st of 2022 - Present</p>
        </div>
      </Skeleton>
    </>
  )
}
