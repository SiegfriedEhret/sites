export enum ContentTypes {
  Video = "video/mp4",
}
export interface Media {
  contentType: ContentTypes;
  height: number;
  thumbnail: string;
  title: string;
  url: string;
  width: number;
}
