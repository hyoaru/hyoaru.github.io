export class GitContribution {
  date: string;
  count: number;
  level: number;

  public constructor(init: GitContribution) {
    this.date = init.date;
    this.count = init.count;
    this.level = init.level;
  }
}
