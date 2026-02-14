import type { RecentCommit } from "../../repositories/git/entities";
import type { GitService } from "../service";
import type { GitServiceOperation } from "./interface";

export class GetRecentCommit implements GitServiceOperation<RecentCommit> {
  username: string;

  public constructor(username: string) {
    this.username = username;
  }

  public async execute(service: GitService): Promise<RecentCommit> {
    return await service.gitRepository.getRecentCommit(this.username);
  }
}
