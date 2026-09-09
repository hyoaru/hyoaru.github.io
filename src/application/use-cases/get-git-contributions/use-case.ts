import type { GitRepository } from "@/application/ports/git-repository";
import type { UseCase } from "../interface";
import type { GetGitContributionsRequest } from "./request";
import type { GetGitContributionsResponse } from "./response";

export class GetGitContributions implements UseCase<
  GetGitContributionsRequest,
  GetGitContributionsResponse
> {
  readonly gitRepository: GitRepository;

  public constructor(init: { gitRepository: GitRepository }) {
    this.gitRepository = init.gitRepository;
  }
  public async execute(
    request: GetGitContributionsRequest,
  ): Promise<GetGitContributionsResponse> {
    const contributions = await this.gitRepository.getContributions(
      request.username,
    );

    const total = contributions.reduce(
      (sum, contribution) => sum + contribution.count,
      0,
    );

    return { total, contributions };
  }
}
