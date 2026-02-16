import axios, { type AxiosInstance } from "axios";
import type { VisitorCountRequest, VisitorCountResponse } from "../../dto";
import {
  VisitorBadgeClientError,
  VisitorBadgeClientRequestError,
} from "../../errors";
import type { VisitorBadgeClient } from "../../interface";

export class HttpVisitorBadgeClient implements VisitorBadgeClient {
  readonly api: AxiosInstance;

  public constructor(api?: AxiosInstance) {
    this.api =
      api || axios.create({ baseURL: "https://api.visitorbadge.io/api" });
  }

  private async request<T>(execute: () => Promise<T>): Promise<T> {
    try {
      return await execute();
    } catch (error: unknown) {
      if (error instanceof VisitorBadgeClientError) {
        throw error;
      }

      if (axios.isAxiosError(error)) {
        throw new VisitorBadgeClientRequestError(
          `An error has occured while requesting: ${error.message}`,
          { cause: error },
        );
      }

      const message = error instanceof Error ? error.message : String(error);
      throw new VisitorBadgeClientError(`An error has occured: ${message}`, {
        cause: error,
      });
    }
  }

  public async getVisitorCount(
    request: VisitorCountRequest,
  ): Promise<VisitorCountResponse> {
    return await this.request(async () => {
      const { data } = await this.api.get("/visitors", {
        params: { path: request.path },
        responseType: "text",
      });

      const match = data.match(/VISITORS:\s*([\d.kKM,]+)/i);

      if (match && match[1]) {
        const rawValue = match[1].trim();
        const numericValue = parseInt(rawValue.replace(/,/g, ""), 10);
        return { count: numericValue };
      } else {
        throw new VisitorBadgeClientError(
          "Unable to extract visitor count from response",
        );
      }
    });
  }
}
