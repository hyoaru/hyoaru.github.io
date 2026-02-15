export class GetContributionsRequest {
  username: string;

  public constructor(init: GetContributionsRequest) {
    this.username = init.username;
  }
}
