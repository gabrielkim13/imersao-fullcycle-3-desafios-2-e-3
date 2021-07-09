import { Injectable } from '@nestjs/common';

import { IRoute } from './entities/route.entity';

@Injectable()
export class RoutesService {
  private readonly routes: IRoute[] = [
    {
      id: 1,
      title: 'Route 1', 
      startPosition: { latitude: -15.93077, longitude: 53.38543 },
      endPosition: { latitude: -42.92958, longitude: -67.33565 },
    },
    {
      id: 2,
      title: 'Route 2', 
      startPosition: { latitude: -8.66809, longitude: 86.51915 },
      endPosition: { latitude: 48.36049, longitude: -173.67940 },
    },
    {
      id: 3,
      title: 'Route 3', 
      startPosition: { latitude: -16.12558, longitude: 116.87140 },
      endPosition: { latitude: -45.49036, longitude: 41.99254 },
    },
    {
      id: 4,
      title: 'Route 4', 
      startPosition: { latitude: -28.66345, longitude: 71.36113 },
      endPosition: { latitude: -15.09358, longitude: 1.45735 },
    },
    {
      id: 5,
      title: 'Route 5', 
      startPosition: { latitude: -46.59447, longitude: 170.31203 },
      endPosition: { latitude: -39.28360, longitude: 135.48318 },
    },
  ];

  findAll(): IRoute[] {
    return this.routes;
  }
}
