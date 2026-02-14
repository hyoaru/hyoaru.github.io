export class Experience {
  readonly organization: string;
  readonly title: string;
  readonly summary: string;
  readonly country: string;
  readonly startedAt: string;
  readonly endedAt: string | null;
  readonly technologies: string[];
  readonly highlights: string[];

  constructor(init: Experience) {
    this.organization = init.organization;
    this.title = init.title;
    this.summary = init.summary;
    this.country = init.country;
    this.startedAt = init.startedAt;
    this.endedAt = init.endedAt;
    this.technologies = init.technologies;
    this.highlights = init.highlights;
  }
}
