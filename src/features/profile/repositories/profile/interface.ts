export interface ProfileRepository {
  getPersonalImageUrl(): Promise<string>;
}
