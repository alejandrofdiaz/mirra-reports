import memoize from 'lodash/memoize';
import { Report, ReportKeys } from 'models/Report';

export const MapFile: [string, ReportKeys][] = [
  ['¿Vas a tramitar o has tramitado denuncia?', 'isReported'],
  ['Datos extra vehículo', 'vehicleExtra'],
  ['Descripción del suceso', 'eventDescription'],
  ['Dirección', 'eventLocation'],
  ['Enlace a trayecto', 'journeyUrl'],
  ['Enlace a video', 'videoUrl'],
  ['Fecha y hora', 'eventTime'],
  ['Género denunciado', 'driveGender'],
  ['Matrícula vehículo o vehículos implicados', 'vehicleId'],
  ['Otros datos dirección', 'eventLocationExtra'],
  ['Timestamp', 'timeAdded'],
  ['Email Address', 'userId'],
  ['Color Vehículo', 'vehicleColor'],
  ['Marca Vehículo', 'vehicleBrand'],
  ['Modelo Vehículo', 'vehicleModel'],
];

const getMapKeyNotMemoized = (mapKey: string) =>
  MapFile.find(([key]) => mapKey === key)[1];

export const getMapKey = memoize(getMapKeyNotMemoized);

export const mapObject = (objectToMap: Record<string, unknown>): Report => {
  const entries = Object.entries(objectToMap);
  const entriesSubstituted = entries.map(([key, value]) => [
    getMapKey(key),
    value,
  ]);

  return Object.fromEntries(entriesSubstituted) as Report;
};
