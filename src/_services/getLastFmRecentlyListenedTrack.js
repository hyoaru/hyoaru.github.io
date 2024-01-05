export default async function getLastFmRecentlyListenedTrack() {
  const lastfmApiKey = import.meta.env.VITE_LAST_FM_API_KEY
  const data = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=hyoaru&api_key=${lastfmApiKey}&format=json`)
    .then((res) => res.json())
    .then((recentTracks) => recentTracks?.recenttracks.track?.[0])
  
  return data
}
