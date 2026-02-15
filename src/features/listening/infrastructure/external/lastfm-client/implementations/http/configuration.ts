export class Configuration {
  readonly API_KEY: string;

  public constructor() {
    this.API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
  }
}
