import { TechnologyType } from '@constants/main/types'

export default function TechnologyBadge({ name, logo }: TechnologyType) {

  return (
    <span className='text-[10px] bg-background flex items-center gap-1 border p-1 rounded-lg dark:border-default'>
      <img width={14} height={14} src={`https://cdn.simpleicons.org/${logo}/000000/0070f0`} />
      {name}
    </span>
  )
}