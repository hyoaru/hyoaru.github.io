import type {
  GithubEventsRequest,
  GithubEventsResponse,
  GithubUserRequest,
  GithubUserResponse,
} from "./dto";

export interface GithubClient {
  getEvents(request: GithubEventsRequest): Promise<GithubEventsResponse>;
  getUser(request: GithubUserRequest): Promise<GithubUserResponse>;
}
