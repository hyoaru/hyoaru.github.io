import type { GithubClientOperationInterface } from "./operations/interface";

export interface GithubClientInterface {
  execute<T>(operation: GithubClientOperationInterface<T>): Promise<T>;
}
