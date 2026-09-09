import type { GitRepository } from "@/application/ports/git-repository";
import type { UseCase } from "../interface";
import type { GetRecentGitCommitRequest } from "./request";
import type { GetRecentGitCommitResponse } from "./response";

export class GetRecentGitCommit implements UseCase<
  GetRecentGitCommitRequest,
  GetRecentGitCommitResponse
> {
  readonly gitRepository: GitRepository;

  public constructor(init: { gitRepository: GitRepository }) {
    this.gitRepository = init.gitRepository;
  }
  public async execute(
    request: GetRecentGitCommitRequest,
  ): Promise<GetRecentGitCommitResponse> {
    const recentCommit = await this.gitRepository.getRecentCommit(
      request.username,
    );

    return recentCommit;
  }
}
