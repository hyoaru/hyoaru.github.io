import type { AxiosInstance } from "axios";
import axios from "axios";
import type { RecentlyListenedTrack } from "../../entities";
import { LastFmApiError } from "../../errors";
import type { LastFmClient } from "../../interface";
import type { RecentlyListenedTracksDTO } from "./dto";

export class HttpLastFmClient implements LastFmClient {
  private readonly api: AxiosInstance;
  private readonly apiKey: string;

  constructor(api?: AxiosInstance, apiKey?: string) {
    this.apiKey = apiKey ?? import.meta.env.VITE_LAST_FM_API_KEY;
    this.api =
      api ??
      axios.create({
        baseURL: "https://ws.audioscrobbler.com/2.0",
        params: {
          api_key: this.apiKey,
          format: "json",
        },
      });
  }

  private async request<T>(execute: () => Promise<T>): Promise<T> {
    try {
      return await execute();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new LastFmApiError(error.response?.status ?? 500, error.message);
      }
      throw error;
    }
  }

  getRecentTrack(username: string): Promise<RecentlyListenedTrack> {
    const apiMethod = "user.getrecenttracks";
    return this.request<RecentlyListenedTrack>(async () => {
      const { data } = await this.api.get<RecentlyListenedTracksDTO>("/", {
        params: {
          ...this.api.defaults.params,
          method: apiMethod,
          user: username,
        },
      });

      const recentTrack = data.recenttracks.track[0];
      const trackImages = recentTrack.image?.filter((image) =>
        ["small", "medium", "large"].includes(image?.size),
      );

      return {
        image_url: trackImages?.[trackImages.length - 1]?.["#text"],
        artist: recentTrack.artist?.["#text"],
        title: recentTrack.name,
      };
    });
  }
}
