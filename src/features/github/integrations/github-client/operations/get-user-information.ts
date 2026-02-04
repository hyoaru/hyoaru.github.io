import axios from "axios";
import type { GetUserInformationResponse } from "../types";
import type { GithubClientOperationInterface } from "./interface";

type GithubUserInformation = {
  company: string | null;
  location: string;
  hireable: boolean | null;
  public_repos: number;
  created_at: string;
  updated_at: string;
};

export class GetUserInformation implements GithubClientOperationInterface<GetUserInformationResponse> {
  username: string;

  public constructor(username: string | null = null) {
    this.username = username ?? "hyoaru";
  }

  public async execute(): Promise<GetUserInformationResponse> {
    const url = `https://api.github.com/users/${this.username}`;
    const response = await axios.get<GithubUserInformation>(url);
    const { hireable, ...rest } = response.data;

    return { hireable: hireable ?? false, ...rest };
  }
}
