import axios, { type AxiosInstance } from "axios";
import type { GetRecentTracksRequest, GetRecentTracksResponse } from "./dto";
import { LastfmClientError } from "./errors";
import type { LastfmClient } from "./interface";

type HttpTrack = {
  name: string;
  artist: { "#text": string };
  image: { size: string; "#text": string }[];
};

type HttpRecentTracks = {
  recenttracks: {
    track: HttpTrack[];
  };
};

export class HttpLastfmClient implements LastfmClient {
  private readonly api: AxiosInstance;

  public constructor(apiKey: string) {
    this.api = axios.create({
      baseURL: "https://ws.audioscrobbler.com/2.0",
      params: {
        api_key: apiKey,
        format: "json",
      },
    });
  }

  public async getRecentTracks(
    request: GetRecentTracksRequest,
  ): Promise<GetRecentTracksResponse> {
    try {
      const { data } = await this.api.get<HttpRecentTracks>("/", {
        params: {
          method: "user.getrecenttracks",
          user: request.username,
        },
      });

      const tracks = data.recenttracks.track.map((track) => {
        const trackImages = track.image?.filter((image) =>
          ["small", "medium", "large"].includes(image?.size),
        );
        return {
          title: track.name,
          artist: track.artist["#text"],
          imageUrl: trackImages?.at(-1)?.["#text"],
        };
      });

      return { tracks };
    } catch (error) {
      if (error instanceof LastfmClientError) {
        throw error;
      }

      const message = error instanceof Error ? error.message : String(error);
      throw new LastfmClientError(`Get recent tracks error: ${message}`, {
        cause: error,
      });
    }
  }
}
