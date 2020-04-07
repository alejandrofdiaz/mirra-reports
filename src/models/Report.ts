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
  eventTime: Date;
  eventLocation: string;
  eventLocationExtra: string;
  eventDescription: string;
}

export interface Report extends ReportedData, EventData {
  timeAdded: Date;
  userId: string;
  videoUrl: string;
  journeyUrl: string;
  isReported: boolean;
}

export type ReportKeys = keyof Report;
