export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface AlbumState {
  albums: Array<Album>;
}
