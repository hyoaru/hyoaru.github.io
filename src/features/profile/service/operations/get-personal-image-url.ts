import type { ProfileService } from "../service";
import type { ProfileServiceOperation } from "./interface";

export class GetPersonalImageUrl implements ProfileServiceOperation<string> {
  async execute(service: ProfileService): Promise<string> {
    return await service.profileRepository.getPersonalImageUrl();
  }
}
