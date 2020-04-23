import { Report } from 'models/Report';

export interface SimplifiedReport
  extends Pick<
    Report,
    | 'eventCoordinates'
    | 'eventDescription'
    | 'eventLocation'
    | 'eventLocationExtra'
    | 'eventTime'
    | 'id'
    | 'vehicleBrand'
    | 'vehicleColor'
    | 'vehicleModel'
  > {}
