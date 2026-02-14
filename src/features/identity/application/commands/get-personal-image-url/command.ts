import type { Command } from "@/core/application/commands";
import type { ProfileRepository } from "../../ports";

export class GetPersonalImageUrl implements Command<string> {
  private profileRepository: ProfileRepository;

  public constructor(profileRepository: ProfileRepository) {
    this.profileRepository = profileRepository;
  }

  public async execute() {
    return await this.profileRepository.getPersonalImageUrl();
  }
}
