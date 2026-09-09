import type { ProfileRepository } from "@/application/ports/profile-repository";
import type { UseCase } from "../interface";
import type { GetCertificationsResponse } from "./response";

export class GetCertifications implements UseCase<
  void,
  GetCertificationsResponse
> {
  readonly profileRepository: ProfileRepository;

  public constructor(init: { profileRepository: ProfileRepository }) {
    this.profileRepository = init.profileRepository;
  }
  public async execute(): Promise<GetCertificationsResponse> {
    return this.profileRepository.getCertifications();
  }
}
