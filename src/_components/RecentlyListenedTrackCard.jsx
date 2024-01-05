import React from 'react'
import { Skeleton } from '@nextui-org/react'

export default function RecentlyListenedTrackCard(props) {
  const { recentTrack, isLoading, isError } = props
  const { image: images, name: title, artist } = recentTrack
  const filteredImages = images?.filter((image) => ['small', 'medium', 'large'].includes(image?.size))
  const imageUrl = filteredImages?.[filteredImages.length - 1]?.['#text']
  const artistName = artist?.['#text']

  return (
    <Skeleton isLoaded={!isLoading} classNames={{ content: 'h-full w-full', base: "rounded-xl flex h-full w-full" }}>
      <div className="border rounded-xl flex items-center bg-center bg-cover relative w-full h-full overflow-hidden" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="absolute w-full h-full backdrop-blur-[12px] opacity-90"></div>
        <div className="flex items-center h-full w-full px-1 py-4 md:px-4 xl:p-4">
          <img src={imageUrl} className='hidden rounded-xl h-[60px] w-[60px] object-fit object-center z-[1] xl:flex' />
          <div className="w-full z-[2] text-white text-center py-4 xl:py-0 xl:text-start xl:ms-4">
            <p className='text-[8px] font-light'>{'Last.fm ･ listened to'}</p>
            <p className='text-xs font-semibold'>{title}</p>
            <p className='text-[10px]'>{artistName}</p>
          </div>
        </div>
      </div>
    </Skeleton>
  )
}
