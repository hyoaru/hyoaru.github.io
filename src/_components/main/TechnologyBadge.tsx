import { useThemeContext } from '@context/ThemeContext'
import getTechnologyBadgeUrl from '@libraries/getTechnologyBadgeUrl'
import { TechnologyType } from '@constants/main/types'

type TechnologyBadgeProps = Pick<TechnologyType, 'technologyName' | 'technologyLogo'>

export default function TechnologyBadge({technologyName, technologyLogo }: TechnologyBadgeProps) {
  const { theme } = useThemeContext()
  const url = getTechnologyBadgeUrl({
    name: technologyName,
    logo: technologyLogo,
    themeState: theme
  })

  return <img src={url} className='rounded-lg border dark:border-transparent' />
}