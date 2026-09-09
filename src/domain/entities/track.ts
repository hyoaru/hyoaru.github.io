interface TrackProps {
  title: string;
  artist: string;
  imageUrl?: string;
}

export class Track {
  public readonly title: string;
  public readonly artist: string;
  public readonly imageUrl?: string;

  public constructor(init: TrackProps) {
    this.title = init.title;
    this.artist = init.artist;
    this.imageUrl = init.imageUrl;
  }
}
