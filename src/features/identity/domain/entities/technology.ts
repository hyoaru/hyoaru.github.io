export class Technology {
  name: string;
  logoUrl: string;

  public constructor(init: Technology) {
    this.name = init.name;
    this.logoUrl = init.logoUrl;
  }
}
