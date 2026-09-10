interface ProjectProps {
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  repositoryUrl?: string;
  liveUrl?: string;
  tags: string[];
}

export class Project {
  public readonly title: string;
  public readonly description: string;
  public readonly date: string;
  public readonly imageUrl?: string;
  public readonly repositoryUrl?: string;
  public readonly liveUrl?: string;
  public readonly tags: string[];

  public constructor(init: ProjectProps) {
    this.title = init.title;
    this.description = init.description;
    this.date = init.date;
    this.imageUrl = init.imageUrl;
    this.repositoryUrl = init.repositoryUrl;
    this.liveUrl = init.liveUrl;
    this.tags = init.tags;
  }
}
