export class PersonalImageNotFoundError extends Error {
  constructor() {
    super("Personal image not found");
    this.name = "PersonalImageNotFoundError";
  }
}
