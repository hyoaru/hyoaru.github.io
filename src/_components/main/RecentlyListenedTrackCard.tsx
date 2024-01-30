import { Skeleton } from '@nextui-org/react'
import { LastFmRecentlyListenedTrackType } from '@constants/main/types'

type RecentlyListenedTrackCardProps = {
  data: LastFmRecentlyListenedTrackType | undefined
  isLoading: boolean
  isError: boolean
}

export default function RecentlyListenedTrackCard({ data, isLoading, isError } : RecentlyListenedTrackCardProps) {
  const { image_url: imageUrl, artist, title } = data || {}

  if (isError) {
    return (
      <div className="h-full w-full rounded-xl relative bg-danger">
        <div className="absolute w-full h-full rounded-xl backdrop-blur-[12px] opacity-90"></div>
        <div className="flex w-full h-full items-center">
          <div className="w-full py-8 text-background text-center z-[2]">
            <p className="text-[8px]">{'Last.fm'}</p>
            <p className="text-xs font-semibold">An error has occured.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Skeleton isLoaded={!isLoading} classNames={{ content: 'h-full w-full', base: "rounded-xl flex h-full w-full" }}>
      <div
        className={`rounded-xl flex items-center bg-center bg-cover relative w-full h-full overflow-hidden ${isError ? '!bg-none bg-danger' : 'border'}`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute w-full h-full backdrop-blur-[12px] opacity-90"></div>
        <div className="flex items-center h-full w-full px-4 py-8 md:px-4 xl:p-4">
          <img src={imageUrl} className='hidden rounded-xl h-[60px] w-[60px] object-fit object-center z-[1] xl:flex' />
          <div className="w-full z-[2] text-white text-center xl:py-0 xl:text-start xl:ms-4">
            <p className='text-[8px] font-light'>{'Last.fm ･ listened to'}</p>
            <p className='text-xs font-semibold break-words'>{title}</p>
            <p className='text-[10px] break-words'>{artist}</p>
          </div>
        </div>
      </div>
    </Skeleton>
  )
}