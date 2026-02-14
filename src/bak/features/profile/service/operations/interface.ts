import type { ProfileService } from "../service";

export interface ProfileServiceOperation<T> {
  execute(service: ProfileService): Promise<T>;
}
