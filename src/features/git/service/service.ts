import { GithubGitRepository, type GitRepository } from "../repositories/git";
import type { GitServiceOperation } from "./operations/interface";

export class GitService {
  gitRepository: GitRepository;

  public constructor(profileRepository?: GitRepository) {
    this.gitRepository = profileRepository ?? new GithubGitRepository();
  }

  public async execute<T>(operation: GitServiceOperation<T>): Promise<T> {
    return await operation.execute(this);
  }
}
