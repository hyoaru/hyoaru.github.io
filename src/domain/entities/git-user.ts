export class GitUser {
  username: string;
  publicRepositories: number;
  company?: string;
  location?: string;
  hireable?: boolean;
  createdAt: string;
  updatedAt: string;

  public constructor(init: GitUser) {
    this.username = init.username;
    this.publicRepositories = init.publicRepositories;
    this.company = init.company;
    this.location = init.location;
    this.hireable = init.hireable;
    this.createdAt = init.createdAt;
    this.updatedAt = init.updatedAt;
  }
}
