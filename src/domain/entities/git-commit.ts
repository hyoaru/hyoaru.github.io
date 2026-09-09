interface GitCommitProps {
  id: string;
  username: string;
  repository: string;
  createdAt: Date;
}

export class GitCommit {
  public readonly id: string;
  public readonly username: string;
  public readonly repository: string;
  public readonly createdAt: Date;

  public constructor(init: GitCommitProps) {
    this.id = init.id;
    this.username = init.username;
    this.repository = init.repository;
    this.createdAt = init.createdAt;
  }
}
