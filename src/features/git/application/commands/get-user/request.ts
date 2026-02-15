export class GetUserRequest {
  readonly username: string;

  public constructor(init: GetUserRequest) {
    this.username = init.username;
  }
}
