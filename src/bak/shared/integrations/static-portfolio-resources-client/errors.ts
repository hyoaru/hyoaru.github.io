export class StaticPortfolioResourcesClientError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = "StaticPortfolioResourcesClientError";
    Object.setPrototypeOf(this, StaticPortfolioResourcesClientError.prototype);
  }
}
export class StaticPortfolioResourcesClientFileNotFoundError extends StaticPortfolioResourcesClientError {
  constructor(filename: string, options?: ErrorOptions) {
    super(`File not found: ${filename}`, options);
    this.name = "StaticPortfolioResourcesClientFileNotFoundError";
    Object.setPrototypeOf(
      this,
      StaticPortfolioResourcesClientFileNotFoundError.prototype,
    );
  }
}
