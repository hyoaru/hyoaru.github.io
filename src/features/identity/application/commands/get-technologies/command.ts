import type { Command } from "@/core/application/commands";
import type { Technology } from "@/features/identity/domain/entities";
import type { TechnologyRepository } from "../../ports";

export class GetTechnologies implements Command<Technology[]> {
  private technologyRepository: TechnologyRepository;

  public constructor(technologyRepository: TechnologyRepository) {
    this.technologyRepository = technologyRepository;
  }

  public async execute() {
    return await this.technologyRepository.getTechnologies();
  }
}
