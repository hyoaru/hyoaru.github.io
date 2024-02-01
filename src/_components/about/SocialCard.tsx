import BentoBox from "@components/about/BentoBox"
import { SocialType } from "@constants/main/types"

export default function SocialCard({ link, name, label, anchorClass }: SocialType) {
  return (
    <BentoBox className='!p-5'>
      <a href={link} target='_blank' className={`flex flex-grow items-center gap-4 break-inside-avoid-column ${anchorClass && 'pointer-events-none'}`}>
        <img width={32} height={32} src={`https://cdn.simpleicons.org/${name}/000000/ffffff`} alt="" />
        <div className="">
          <p className="text-xs opacity-50">Social</p>
          <p className="font-bold text-sm">{label}</p>
        </div>
      </a>
    </BentoBox>
  )
}
