import type { UserInformation } from "../../repositories/git/entities";
import type { GitService } from "../service";
import type { GitServiceOperation } from "./interface";

export class GetUserInformation implements GitServiceOperation<UserInformation> {
  username: string;

  public constructor(username: string) {
    this.username = username;
  }

  public async execute(service: GitService): Promise<UserInformation> {
    return await service.gitRepository.getUserInformation(this.username);
  }
}
