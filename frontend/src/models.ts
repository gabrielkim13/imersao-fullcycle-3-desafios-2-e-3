export interface ILatLong {
  latitude: number;
  longitude: number;
}

export interface IRoute {
  id: number;
  title: string;
  startPosition: ILatLong,
  endPosition: ILatLong, 
}
