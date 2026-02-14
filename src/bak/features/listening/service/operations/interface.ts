import type { ListeningService } from "../service";

export interface ListeningServiceOperation<T> {
  execute(service: ListeningService): Promise<T>;
}
