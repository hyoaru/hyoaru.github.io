import type { CareerExperience } from "../../repositories/career/entities";
import type { CareerService } from "../service";
import type { CareerServiceOperation } from "./interface";

export class GetCareerExperiences implements CareerServiceOperation<
  CareerExperience[]
> {
  public async execute(service: CareerService): Promise<CareerExperience[]> {
    return await service.careerRepository.getExperiences();
  }
}
