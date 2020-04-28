type Dateable = string;
type Coordinates = Record<'lat' | 'lng', number>;

interface VehicleData {
  vehicleBrand: string;
  vehicleColor: string;
  vehicleExtra: string; // Sensitive
  vehicleId: string; // Sensitive
  vehicleModel: string;
}

interface DriverData {
  driveGender: 'male' | 'female' | 'other' | 'dont_know'; // Sensitive
}

interface ReportedData extends VehicleData, DriverData {}

interface EventData {
  eventCoordinates: Coordinates;
  eventDescription: string;
  eventLocation: string;
  eventLocationExtra: string;
  eventTime: Dateable;
}

export interface Report extends ReportedData, EventData {
  id: string;
  isReported: boolean; // Sensitive
  journeyUrl: string; // Sensitive
  timeAdded: Dateable; // Sensitive
  userId: string; // Sensitive
  videoUrl: string; // Sensitive
}

export type ReportKeys = keyof Report;
