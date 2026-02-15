import type { Command } from "@/shared/application/commands";
import type { GitContributionRepository } from "../../ports";
import type { GetContributionsRequest } from "./request";
import type { GetContributionsResponse } from "./response";

export class GetContributions implements Command<GetContributionsResponse> {
  readonly request: GetContributionsRequest;
  readonly gitContibutionRepository: GitContributionRepository;

  public constructor(init: {
    request: GetContributionsRequest;
    gitContributionRepository: GitContributionRepository;
  }) {
    this.request = init.request;
    this.gitContibutionRepository = init.gitContributionRepository;
  }

  public async execute() {
    const contributions = await this.gitContibutionRepository.getContributions(
      this.request.username,
    );

    const total = contributions.reduce(
      (sum, contribution) => sum + contribution.count,
      0,
    );

    return { total, contributions };
  }
}
