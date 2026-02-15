import type { Command } from "@/shared/application/commands";
import type { Experience } from "@/features/identity/domain/entities";
import type { ProfileRepository } from "../../ports";

export class GetCareerHistory implements Command<Experience[]> {
  private profileRepository: ProfileRepository;

  public constructor(profileRepository: ProfileRepository) {
    this.profileRepository = profileRepository;
  }

  public async execute() {
    return await this.profileRepository.getCareerHistory();
  }
}
