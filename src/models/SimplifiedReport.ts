import { Report } from 'models/Report';

export interface SimplifiedReport
  extends Pick<
    Report,
    | 'eventDescription'
    | 'eventLocation'
    | 'eventLocationExtra'
    | 'eventTime'
    | 'vehicleBrand'
    | 'vehicleColor'
    | 'vehicleModel'
    | 'id'
  > {}
