export interface VisitorRepository {
  getVisitorCount(): Promise<number>;
}
