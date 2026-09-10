import type { ProfileRepository } from "@/application/ports/profile-repository";
import type { UseCase } from "../interface";
import type { GetProjectsResponse } from "./response";

export class GetProjects implements UseCase<void, GetProjectsResponse> {
  readonly profileRepository: ProfileRepository;

  public constructor(init: { profileRepository: ProfileRepository }) {
    this.profileRepository = init.profileRepository;
  }
  public async execute(): Promise<GetProjectsResponse> {
    return this.profileRepository.getProjects();
  }
}
