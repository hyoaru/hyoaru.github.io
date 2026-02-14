import {
  type CareerRepository,
  StaticCareerRepository,
} from "../repositories/career";
import type { CareerServiceOperation } from "./operations/interface";

export class CareerService {
  careerRepository: CareerRepository;

  public constructor(profileRepository?: CareerRepository) {
    this.careerRepository = profileRepository ?? new StaticCareerRepository();
  }

  public async execute<T>(operation: CareerServiceOperation<T>): Promise<T> {
    return await operation.execute(this);
  }
}
