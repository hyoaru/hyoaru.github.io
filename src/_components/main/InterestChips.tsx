import { Chip } from '@nextui-org/react'
import { interests } from '@constants/main/constants'

export default function InterestChips() {
  return (
    <>
      {interests.map((interest) => (
        <Chip
          key={`Interest-${interest}`}
          color='primary'
          variant='dot'
          size='sm'
          classNames={{ base: "border-1 bg-background", content: "text-[8px] md:text-[10px] lg:text-xs" }}
        >
          {interest}
        </Chip>
      ))}
    </>
  )
}
