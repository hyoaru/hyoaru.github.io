import type { Command } from "@/shared/application/commands";
import type { ProfileRepository } from "../../ports";
import type { GetPersonalImageUrlResponse } from "./response";

export class GetPersonalImageUrl implements Command<GetPersonalImageUrlResponse> {
  readonly profileRepository: ProfileRepository;

  public constructor(init: { profileRepository: ProfileRepository }) {
    this.profileRepository = init.profileRepository;
  }

  public async execute() {
    const imageUrl = await this.profileRepository.getPersonalImageUrl();
    return { imageUrl };
  }
}
