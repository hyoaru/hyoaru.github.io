import type { AxiosInstance } from "axios";
import axios from "axios";
import type { RecentTracksRequest, RecentTracksResponse } from "../../dto";
import { LastfmClientError, LastfmClientRequestError } from "../../errors";
import type { LastfmClient } from "../../interface";
import { Configuration } from "./configuration";
import type { HttpLastfmRecentTracks } from "./schemas";

export class HttpLastfmClient implements LastfmClient {
  readonly configuration: Configuration;
  readonly api: AxiosInstance;

  public constructor(configuration?: Configuration, api?: AxiosInstance) {
    this.configuration = configuration || new Configuration();
    this.api =
      api ||
      axios.create({
        baseURL: "https://ws.audioscrobbler.com/2.0",
        params: {
          api_key: this.configuration.API_KEY,
          format: "json",
        },
      });
  }

  private async request<T>(execute: () => Promise<T>): Promise<T> {
    try {
      return await execute();
    } catch (error: unknown) {
      if (error instanceof LastfmClientError) {
        throw error;
      }

      if (axios.isAxiosError(error)) {
        throw new LastfmClientRequestError(
          `An error has occured while requesting: ${error.message}`,
          { cause: error },
        );
      }

      const message = error instanceof Error ? error.message : String(error);
      throw new LastfmClientError(`An error has occured: ${message}`, {
        cause: error,
      });
    }
  }
  public async getRecentTracks(
    request: RecentTracksRequest,
  ): Promise<RecentTracksResponse> {
    return await this.request(async () => {
      const apiMethod = "user.getrecenttracks";
      const { data } = await this.api.get<HttpLastfmRecentTracks>("/", {
        params: {
          ...this.api.defaults.params,
          method: apiMethod,
          user: request.username,
        },
      });

      const imageSizes = ["small", "medium", "large"];

      const recentTracks = data.recenttracks.track.map((track) => {
        const trackImages = track.image?.filter((image) =>
          imageSizes.includes(image?.size),
        );

        return {
          title: track.name,
          artist: track.artist["#text"],
          imageUrl: trackImages?.at(-1)?.["#text"],
        };
      });

      return { tracks: recentTracks };
    });
  }
}
