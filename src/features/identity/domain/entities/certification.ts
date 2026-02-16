export class Certification {
  title: string;
  imageUrl?: string;
  issuer: string;
  issuedAt: string;
  tags: string[];

  public constructor(init: Certification) {
    this.title = init.title;
    this.imageUrl = init.imageUrl;
    this.issuer = init.issuer;
    this.issuedAt = init.issuedAt;
    this.tags = init.tags;
  }
}
