export class Configuration {
  readonly API_KEY: string;

  public constructor() {
    this.API_KEY = import.meta.env.VITE_LAST_FM_API_KEY;
  }
}
