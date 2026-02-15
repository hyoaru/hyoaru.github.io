export interface HttpLastfmTrack {
  mbid: string;
  name: string;
  url: string;
  streamable: string;
  artist: {
    mbid: string;
    "#text": string;
  };
  image: {
    size: string;
    "#text": string;
  }[];
  date: {
    uts: string;
    "#text": string;
  };
  album: {
    mbid: string;
    "#text": string;
  };
}
