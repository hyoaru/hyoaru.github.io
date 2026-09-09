interface ExperienceProps {
  organization: string;
  title: string;
  summary: string;
  country: string;
  startedAt: string;
  endedAt: string | null;
  technologies: string[];
  highlights: string[];
}

export class Experience {
  public readonly organization: string;
  public readonly title: string;
  public readonly summary: string;
  public readonly country: string;
  public readonly startedAt: string;
  public readonly endedAt: string | null;
  public readonly technologies: string[];
  public readonly highlights: string[];

  public constructor(init: ExperienceProps) {
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
