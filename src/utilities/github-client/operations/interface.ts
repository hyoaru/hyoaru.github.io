export interface GithubClientOperationInterface<T> {
  execute(): Promise<T>;
}
