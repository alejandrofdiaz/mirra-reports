type Dateable = string;
type Coordinates = Record<'lat' | 'lng', number>;

interface VehicleData {
  vehicleBrand: string;
  vehicleColor: string;
  vehicleExtra: string;
  vehicleId: string;
  vehicleModel: string;
}

interface DriverData {
  driveGender: 'male' | 'female' | 'other' | 'dont_know';
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
  isReported: boolean;
  journeyUrl: string;
  timeAdded: Dateable;
  userId: string;
  videoUrl: string;
}

export type ReportKeys = keyof Report;
