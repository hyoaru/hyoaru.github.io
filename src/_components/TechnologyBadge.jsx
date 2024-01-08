import React from 'react'

// App imports
import { useThemeContext } from '@context/ThemeContext'
import getTechnologyBadgeUrl from '@libraries/getTechnologyBadgeUrl'

export default function TechnologyBadge({ technology }) {
  const { theme } = useThemeContext()
  const { technologyName, technologyLogo } = technology || {}
  const url = getTechnologyBadgeUrl({
    name: technologyName,
    logo: technologyLogo,
    themeState: theme
  })

  return <img src={url} className='rounded-lg border dark:border-transparent' />
}