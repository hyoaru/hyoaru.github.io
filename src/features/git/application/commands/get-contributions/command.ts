import type { Command } from "@/shared/application/commands";
import type { GitContributionRepository } from "../../ports";
import type { GetContributionsRequest } from "./request";
import type { GetContributionsResponse } from "./response";

export class GetContributions implements Command<GetContributionsResponse> {
  readonly request: GetContributionsRequest;
  readonly gitContibutionRepository: GitContributionRepository;

  public constructor(init: {
    request: GetContributionsRequest;
    gitContibutionRepository: GitContributionRepository;
  }) {
    this.request = init.request;
    this.gitContibutionRepository = init.gitContibutionRepository;
  }

  public async execute() {
    const contributions = await this.gitContibutionRepository.getContributions(
      this.request.username,
    );

    return { contributions };
  }
}
