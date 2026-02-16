import type { Command } from "@/shared/application/commands";
import type { ProfileRepository } from "../../ports";
import type { GetCertificationsResponse } from "./response";

export class GetCertifications implements Command<GetCertificationsResponse> {
  readonly profileRepository: ProfileRepository;

  public constructor(init: { profileRepository: ProfileRepository }) {
    this.profileRepository = init.profileRepository;
  }

  public async execute() {
    const certifications = await this.profileRepository.getCertifications();
    return { certifications };
  }
}
