import type { GitRepository } from "@/application/ports/git-repository";
import type { UseCase } from "../interface";
import type { GetGitUserInformationRequest } from "./request";
import type { GetGitUserInformationResponse } from "./response";

export class GetGitUserInformation implements UseCase<
  GetGitUserInformationRequest,
  GetGitUserInformationResponse
> {
  readonly gitRepository: GitRepository;

  public constructor(init: { gitRepository: GitRepository }) {
    this.gitRepository = init.gitRepository;
  }
  public async execute(
    request: GetGitUserInformationRequest,
  ): Promise<GetGitUserInformationResponse> {
    const user = await this.gitRepository.getUserInformation(
      request.username,
    );

    return user;
  }
}
