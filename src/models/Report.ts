type Dateable = string;

interface VehicleData {
  vehicleId: string;
  vehicleColor: string;
  vehicleBrand: string;
  vehicleModel: string;
  vehicleExtra: string;
}

interface DriverData {
  driveGender: 'male' | 'female' | 'other' | 'dont_know';
}

interface ReportedData extends VehicleData, DriverData {}

interface EventData {
  eventTime: Dateable;
  eventLocation: string;
  eventLocationExtra: string;
  eventDescription: string;
}

export interface Report extends ReportedData, EventData {
  timeAdded: Dateable;
  id: string;
  userId: string;
  videoUrl: string;
  journeyUrl: string;
  isReported: boolean;
}

export type ReportKeys = keyof Report;
