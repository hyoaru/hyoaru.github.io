import { LastFmRecentlyListenedTrackType, LastFmRecentlyListenedTracksType } from "@constants/main/types"

export default async function getLastFmRecentlyListenedTrack() {
  const lastfmApiKey = import.meta.env.VITE_LAST_FM_API_KEY
  const apiUrl = 'https://ws.audioscrobbler.com/2.0'
  const apiMethod = 'user.getrecenttracks&user=hyoaru'
  const data = await fetch(`${apiUrl}/?method=${apiMethod}&api_key=${lastfmApiKey}&format=json`, {
    method: "GET",
    headers: { 'user-agent': 'hyoaru' },
  })
    .then((res) => res.json() as Promise<LastFmRecentlyListenedTracksType>)
    .then((recentTracks) => recentTracks?.recenttracks.track?.[0])
    .then((recentTrack) => {
      const filteredImages = recentTrack.image?.filter((image) => ['small', 'medium', 'large'].includes(image?.size))
      const data: LastFmRecentlyListenedTrackType = {
        image_url: filteredImages?.[filteredImages.length - 1]?.['#text'],
        artist: recentTrack.artist?.['#text'],
        title: recentTrack.name
      }

      return data
    })

  return data
}