import type { Command } from "@/shared/application/commands";
import type { ProfileRepository } from "../../ports";
import type { GetResumeResponse } from "../get-resume";

export class GetResume implements Command<GetResumeResponse> {
  readonly profileRepository: ProfileRepository;

  public constructor(init: { profileRepository: ProfileRepository }) {
    this.profileRepository = init.profileRepository;
  }

  public async execute() {
    const resume = await this.profileRepository.getResume();
    return { resume };
  }
}
