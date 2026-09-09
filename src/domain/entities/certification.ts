interface CertificationProps {
  title: string;
  imageUrl?: string;
  issuer: string;
  issuedAt: string;
  tags: string[];
}

export class Certification {
  public readonly title: string;
  public readonly imageUrl?: string;
  public readonly issuer: string;
  public readonly issuedAt: string;
  public readonly tags: string[];

  public constructor(init: CertificationProps) {
    this.title = init.title;
    this.imageUrl = init.imageUrl;
    this.issuer = init.issuer;
    this.issuedAt = init.issuedAt;
    this.tags = init.tags;
  }
}
