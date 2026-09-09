import axios from "axios";
import type { Event, GithubClient, User } from "../interface";

type HttpActor = {
  id: number;
  login: string;
  avatar_url: string;
};

type HttpRepository = {
  id: number;
  name: string;
  url: string;
};

type HttpEvent = {
  id: string;
  type: string;
  actor: HttpActor;
  repo: HttpRepository;
  created_at: string;
};

export type HttpUser = {
  login: string;
  public_repos: number;
  company?: string;
  location?: string;
  hireable?: boolean;
  created_at: string;
  updated_at: string;
};

export class HttpGithubClient implements GithubClient {
  public async getUserEvents(username: string): Promise<Event[]> {
    const { data } = await axios.get<HttpEvent[]>(
      `https://api.github.com/users/${username}/events`,
    );

    const events = data.map((event) => ({
      id: event.id,
      type: event.type,
      actor: {
        id: event.actor.id,
        username: event.actor.login,
        avatarUrl: event.actor.avatar_url,
      },
      repository: {
        id: event.repo.id,
        name: event.repo.name,
        url: event.repo.url,
      },
      createdAt: event.created_at,
    }));

    return events;
  }

  public async getUserInformation(username: string): Promise<User> {
    const { data } = await axios.get<HttpUser>(
      `https://api.github.com/users/${username}`,
    );

    return {
      username: data.login,
      publicRepositories: data.public_repos,
      company: data.company,
      location: data.location,
      hireable: data.hireable,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    };
  }
}
