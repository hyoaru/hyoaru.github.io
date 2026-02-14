import type { TechnologyService } from "../service";

export interface TechnologyServiceOperation<T> {
  execute(service: TechnologyService): Promise<T>;
}
