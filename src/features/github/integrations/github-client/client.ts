import type { GithubClientInterface } from "./interface";
import type { GithubClientOperationInterface } from "./operations/interface";

export class GithubClient implements GithubClientInterface {
  public async execute<T>(
    operation: GithubClientOperationInterface<T>,
  ): Promise<T> {
    return await operation.execute();
  }
}
