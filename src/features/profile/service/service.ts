import {
  StaticProfileRepository,
  type ProfileRepository,
} from "../repositories/profile";
import type { ProfileServiceOperation } from "./operations/interface";

export class ProfileService {
  profileRepository: ProfileRepository;

  public constructor(profileRepository?: ProfileRepository) {
    this.profileRepository = profileRepository ?? new StaticProfileRepository();
  }

  async execute<T>(operation: ProfileServiceOperation<T>): Promise<T> {
    return await operation.execute(this);
  }
}
