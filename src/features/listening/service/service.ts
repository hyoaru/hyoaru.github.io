import type { ListeningRepository } from "../repositories/listening";
import { LastFmListeningRepository } from "../repositories/listening/implementations/last-fm";
import type { ListeningServiceOperation } from "./operations/interface";

export class ListeningService {
  listeningRepository: ListeningRepository;

  public constructor(listeningRepository?: ListeningRepository) {
    this.listeningRepository =
      listeningRepository ?? new LastFmListeningRepository();
  }

  public async execute<T>(operation: ListeningServiceOperation<T>): Promise<T> {
    return await operation.execute(this);
  }
}
