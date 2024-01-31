import { TechnologyType } from '@constants/main/types'

type TechnologyBadgeProps = Pick<TechnologyType, 'technologyName' | 'technologyLogo'>

export default function TechnologyBadge({technologyName, technologyLogo }: TechnologyBadgeProps) {

  return (
    <span className='text-[10px] bg-background flex items-center gap-1 border p-1 rounded-lg dark:border-default'>
      <img width={14} height={14} src={`https://cdn.simpleicons.org/${technologyLogo}/000000/0070f0`} />
      {technologyName}
    </span>
  )
}