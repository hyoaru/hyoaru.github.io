import type { GithubEvent } from "../types";

export interface GithubEventsResponse {
  events: GithubEvent[];
}
