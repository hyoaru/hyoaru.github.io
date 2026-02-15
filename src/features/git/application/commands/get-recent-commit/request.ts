export class GetRecentCommitRequest {
  readonly username: string;

  public constructor(init: GetRecentCommitRequest) {
    this.username = init.username;
  }
}
