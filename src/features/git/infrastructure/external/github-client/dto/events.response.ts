import type { GithubEvent } from "../models";

export interface GithubEventsResponse {
  events: GithubEvent[];
}
