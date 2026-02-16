import type { Command } from "@/shared/application/commands";
import type { VisitorRepository } from "../../ports";
import type { GetVisitorCountResponse } from "./response";

export class GetVisitorCount implements Command<GetVisitorCountResponse> {
  readonly visitorRepository: VisitorRepository;

  public constructor(init: { visitorRepository: VisitorRepository }) {
    this.visitorRepository = init.visitorRepository;
  }

  public async execute() {
    const count = await this.visitorRepository.getVisitorCount();
    return { count };
  }
}
