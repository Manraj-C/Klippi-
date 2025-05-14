
import { RegionPosition } from "./types";

// Helper function to position regions on the map
export function getRegionPosition(region: string): RegionPosition {
  switch (region) {
    case "North America":
      return { x: 23, y: 35 };
    case "Europe":
      return { x: 48, y: 28 };
    case "Asia Pacific":
      return { x: 75, y: 37 };
    case "Latin America":
      return { x: 30, y: 65 };
    case "Other":
      return { x: 50, y: 80 };
    default:
      return { x: 50, y: 50 };
  }
}
