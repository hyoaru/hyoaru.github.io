import {
  type TechnologyRepository,
  StaticTechnologyRepository,
} from "../repositories/technology";
import type { TechnologyServiceOperation } from "./operations/interface";

export class TechnologyService {
  profileRepository: TechnologyRepository;

  public constructor(profileRepository?: TechnologyRepository) {
    this.profileRepository =
      profileRepository ?? new StaticTechnologyRepository();
  }

  public async execute<T>(
    operation: TechnologyServiceOperation<T>,
  ): Promise<T> {
    return await operation.execute(this);
  }
}
