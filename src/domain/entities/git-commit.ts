interface GitCommitProps {
  id: string;
  username: string;
  repository: string;
  createdAt: string;
}

export class GitCommit {
  public readonly id: string;
  public readonly username: string;
  public readonly repository: string;
  public readonly createdAt: string;

  public constructor(init: GitCommitProps) {
    this.id = init.id;
    this.username = init.username;
    this.repository = init.repository;
    this.createdAt = init.createdAt;
  }
}
