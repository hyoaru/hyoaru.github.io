import type { Technology } from "../../repositories/technology/entities";
import type { TechnologyService } from "../service";
import type { TechnologyServiceOperation } from "./interface";

export class GetTechnologies implements TechnologyServiceOperation<
  Technology[]
> {
  public async execute(service: TechnologyService): Promise<Technology[]> {
    return await service.technologyRepository.getTechnologies();
  }
}
