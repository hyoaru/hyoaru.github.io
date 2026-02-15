import type { Command } from "@/shared/application/commands";
import type { TechnologyRepository } from "../../ports";
import type { GetTechnologiesResponse } from "./response";

export class GetTechnologies implements Command<GetTechnologiesResponse> {
  readonly technologyRepository: TechnologyRepository;

  public constructor(init: { technologyRepository: TechnologyRepository }) {
    this.technologyRepository = init.technologyRepository;
  }

  public async execute() {
    const technologies = await this.technologyRepository.getTechnologies();
    return { technologies };
  }
}
