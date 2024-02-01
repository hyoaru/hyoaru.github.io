import BentoBox from '@components/about/BentoBox'
import { FieldInterestType } from '@constants/about/types'

export default function FieldInterestCard({ former, bits, name }: FieldInterestType) {
  return (
    <>
      <BentoBox className={`!p-5 ${former ? 'opacity-50 pointer-events-none' : ''}`}>
        <p className={`text-xs opacity-50`}>Interest</p>
        <p className={`font-bold text-sm ${former ? 'line-through' : ''}`}>{name}</p>
        <div className="flex items-center flex-wrap gap-1 mt-2">
          {bits
            .replaceAll('[', '')
            .replaceAll(']', '')
            .split(',')
            .map((bit) => (
              <p
                key={`Interest-${name}-${bit}`}
                className={`text-[10px] p-1 border rounded-lg transition-all duration-300 ease-in-out hover:border-transparent hover:bg-primary hover:text-primary-foreground`}
              >
                {bit}
              </p>
            ))}
        </div>
      </BentoBox>
    </>
  )
}
