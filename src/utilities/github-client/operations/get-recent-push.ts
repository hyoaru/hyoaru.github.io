import axios from "axios";
import type { GetRecentPushResponse } from "../types";
import type { GithubClientOperationInterface } from "./interface";

type GithubEvent = {
  id: string;
  type: string;
  created_at: string;
  repo: { id: number; name: string; url: string };
};

export class GetRecentPush implements GithubClientOperationInterface<GetRecentPushResponse> {
  username: string;

  public constructor(username: string | null = null) {
    this.username = username ?? "hyoaru";
  }

  public async execute(): Promise<GetRecentPushResponse> {
    const url = `https://api.github.com/users/${this.username}/events`;
    const response = await axios.get<GithubEvent[]>(url);
    const pushEvent = response.data.find((event) => event.type === "PushEvent");

    if (!pushEvent) throw new Error("No recent push event found.");

    return {
      username: this.username,
      repository: pushEvent.repo.name.split("/").at(-1)!,
      created_at: pushEvent.created_at,
    };
  }
}
