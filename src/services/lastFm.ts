import {
  LastFmRecentlyListenedTrack,
  LastFmRecentlyListenedTracks,
} from "@/types/lastFm";
import axios from "axios";

export const lastFmService = {
  getRecentTrack: async (): Promise<LastFmRecentlyListenedTrack> => {
    const lastfmApiKey = import.meta.env.VITE_LAST_FM_API_KEY;
    const apiUrl = "https://ws.audioscrobbler.com/2.0";
    const apiMethod = "user.getrecenttracks&user=hyoaru";
    const url = `${apiUrl}/?method=${apiMethod}&api_key=${lastfmApiKey}&format=json`;

    return await axios
      .get<LastFmRecentlyListenedTracks>(url, {
        headers: { "user-agent": "hyoaru" },
      })
      .then((response) => response.data)
      .then((recentTracks) => recentTracks?.recenttracks.track?.[0])
      .then((recentTrack) => {
        const filteredImages = recentTrack.image?.filter((image) =>
          ["small", "medium", "large"].includes(image?.size),
        );
        const data: LastFmRecentlyListenedTrack = {
          image_url: filteredImages?.[filteredImages.length - 1]?.["#text"],
          artist: recentTrack.artist?.["#text"],
          title: recentTrack.name,
        };

        return data;
      });
  },
};
