interface ILatLong {
  latitude: number;
  longitude: number;
}

export interface IRoute {
  id: number;
  title: string;
  startPosition: ILatLong,
  endPosition: ILatLong, 
}

export class Route implements IRoute {
  id: number;

  title: string;

  startPositionLatitude: number;

  startPositionLongitude: number;

  endPositionLatitude: number;

  endPositionLongitude: number;

  get startPosition(): ILatLong {
    return {
      latitude: this.startPositionLatitude,
      longitude: this.startPositionLongitude,
    };
  }

  get endPosition(): ILatLong {
    return {
      latitude: this.endPositionLatitude,
      longitude: this.endPositionLongitude,
    };
  }
}
