import type { Command } from "@/shared/application/commands";
import type { ProfileRepository } from "../../ports";
import type { GetCareerHistoryResponse } from "./response";

export class GetCareerHistory implements Command<GetCareerHistoryResponse> {
  readonly profileRepository: ProfileRepository;

  public constructor(init: { profileRepository: ProfileRepository }) {
    this.profileRepository = init.profileRepository;
  }

  public async execute() {
    const careerHistory = await this.profileRepository.getCareerHistory();
    return { careerHistory };
  }
}
