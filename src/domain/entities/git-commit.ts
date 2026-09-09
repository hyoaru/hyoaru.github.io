export class GitCommit {
  id: string;
  username: string;
  repository: string;
  createdAt: string;

  public constructor(init: GitCommit) {
    this.id = init.id;
    this.username = init.username;
    this.repository = init.repository;
    this.createdAt = init.createdAt;
  }
}
