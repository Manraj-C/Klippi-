
export interface CityData {
  name: string;
  clients: number;
  revenue: number;
}

export interface RegionData {
  name: string;
  value: number;
  color: string;
  clients: number;
  revenue: number;
  majorCities: CityData[];
}

export interface RegionPosition {
  x: number;
  y: number;
}
