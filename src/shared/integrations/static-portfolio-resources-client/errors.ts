export class FileNotFoundError extends Error {
  filename: string;

  constructor(filename: string) {
    super(`File not found: ${filename}`);
    this.name = "FileNotFound";
    this.filename = filename;
  }
}
