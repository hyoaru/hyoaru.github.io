import type { ProfileRepository } from "@/application/ports/profile-repository";
import type { UseCase } from "../interface";
import type { GetTechnologiesResponse } from "./response";

export class GetTechnologies implements UseCase<
  void,
  GetTechnologiesResponse
> {
  readonly profileRepository: ProfileRepository;

  public constructor(init: { profileRepository: ProfileRepository }) {
    this.profileRepository = init.profileRepository;
  }
  public async execute(): Promise<GetTechnologiesResponse> {
    return this.profileRepository.getTechnologies();
  }
}
