import type { ProfileRepository } from "@/application/ports/profile-repository";
import type { UseCase } from "../interface";
import type { GetCareerHistoryResponse } from "./response";

export class GetCareerHistory implements UseCase<
  void,
  GetCareerHistoryResponse
> {
  readonly profileRepository: ProfileRepository;

  public constructor(init: { profileRepository: ProfileRepository }) {
    this.profileRepository = init.profileRepository;
  }
  public async execute(): Promise<GetCareerHistoryResponse> {
    return this.profileRepository.getCareerHistory();
  }
}
