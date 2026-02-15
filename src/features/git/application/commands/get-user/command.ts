import type { Command } from "@/shared/application/commands";
import type { GitRepository } from "../../ports";
import type { GetUserRequest } from "./request";
import type { GetUserResponse } from "./response";

export class GetUser implements Command<GetUserResponse> {
  readonly request: GetUserRequest;
  readonly gitRepository: GitRepository;

  public constructor(init: {
    request: GetUserRequest;
    gitRepository: GitRepository;
  }) {
    this.request = init.request;
    this.gitRepository = init.gitRepository;
  }
  public async execute(): Promise<GetUserResponse> {
    const user = await this.gitRepository.getRecentCommit(
      this.request.username,
    );

    return { user };
  }
}
