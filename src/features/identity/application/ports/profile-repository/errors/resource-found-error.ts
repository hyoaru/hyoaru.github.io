import { ProfileRepositoryError } from "./error";

export class ProfileRepositoryResourceNotFoundError extends ProfileRepositoryError {
  public resource: string;

  constructor(resource: string, options?: ErrorOptions) {
    super(`An error has occured when getting resource: ${resource}`, options);
    this.name = "ProfileRepositoryResourceNotFoundError";
    this.resource = resource;
    Object.setPrototypeOf(
      this,
      ProfileRepositoryResourceNotFoundError.prototype,
    );
  }
}
