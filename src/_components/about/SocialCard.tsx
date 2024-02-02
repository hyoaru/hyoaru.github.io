import BentoBox from "@components/about/BentoBox"
import { SocialType } from "@constants/about/types"

export default function SocialCard({ link, name, label }: SocialType) {
  console.log(link)

  return (
    <BentoBox className='!p-5'>
      <a href={link} target='_blank' className={`flex flex-grow items-center gap-4 break-inside-avoid-column ${!link && 'pointer-events-none'}`}>
        <img width={30} height={30} src={`https://cdn.simpleicons.org/${name}/000000/ffffff`} alt="" />
        <div className="">
          <p className="text-xs opacity-50">Social</p>
          <p className="font-bold text-sm">{label}</p>
        </div>
      </a>
    </BentoBox>
  )
}
