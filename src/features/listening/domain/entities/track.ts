export class Track {
  title: string;
  artist: string;
  imageUrl?: string;

  public constructor(init: Track) {
    this.title = init.title;
    this.artist = init.artist;
    this.imageUrl = init.imageUrl;
  }
}
