import type { ContributionStats } from "../../repositories/git/entities";
import type { GitService } from "../service";
import type { GitServiceOperation } from "./interface";

export class GetContributionStats implements GitServiceOperation<ContributionStats> {
  username: string;

  public constructor(username: string) {
    this.username = username;
  }

  public async execute(service: GitService): Promise<ContributionStats> {
    return await service.gitRepository.getContributionStats(this.username);
  }
}
