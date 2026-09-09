export interface Actor {
  id: number;
  username: string;
  avatarUrl: string;
}

export interface Repository {
  id: number;
  name: string;
  url: string;
}

export interface Event {
  id: string;
  type: string;
  actor: Actor;
  repository: Repository;
  createdAt: Date;
}

export interface User {
  username: string;
  publicRepositories: number;
  company?: string;
  location?: string;
  hireable?: boolean;
  createdAt: Date;
  updatedAt: string;
}

export interface Contribution {
  date: string;
  count: number;
  level: number;
}

export interface GithubClient {
  getUserEvents(username: string): Promise<Event[]>;
  getUserInformation(username: string): Promise<User>;
  getUserContributions(username: string): Promise<Contribution[]>;
}
