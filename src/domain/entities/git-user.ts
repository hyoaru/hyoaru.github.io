interface GitUserProps {
  username: string;
  publicRepositories: number;
  company?: string;
  location?: string;
  hireable?: boolean;
  createdAt: Date;
  updatedAt: string;
}

export class GitUser {
  public readonly username: string;
  public readonly publicRepositories: number;
  public readonly company?: string;
  public readonly location?: string;
  public readonly hireable?: boolean;
  public readonly createdAt: Date;
  public readonly updatedAt: string;

  public constructor(init: GitUserProps) {
    this.username = init.username;
    this.publicRepositories = init.publicRepositories;
    this.company = init.company;
    this.location = init.location;
    this.hireable = init.hireable;
    this.createdAt = init.createdAt;
    this.updatedAt = init.updatedAt;
  }
}
