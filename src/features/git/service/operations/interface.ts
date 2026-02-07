import type { GitService } from "../service";

export interface GitServiceOperation<T> {
  execute(service: GitService): Promise<T>;
}
