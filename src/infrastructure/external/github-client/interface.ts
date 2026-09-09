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
  createdAt: string;
}

export interface User {
  username: string;
  publicRepositories: number;
  company?: string;
  location?: string;
  hireable?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GithubClient {
  getUserEvents(username: string): Promise<Event[]>;
  getUserInformation(username: string): Promise<User>;
}
