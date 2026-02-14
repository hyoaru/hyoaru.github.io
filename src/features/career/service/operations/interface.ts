import type { CareerService } from "../service";

export interface CareerServiceOperation<T> {
  execute(service: CareerService): Promise<T>;
}
