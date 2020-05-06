export const googleMapsUrl = (() =>
  `https://maps.googleapis.com/maps/api/js?${process.env.GOOGLE_MAPS_JS}`)();

export interface GoogleMapsStaticParams {
  mapType?: 'roadmap' | 'satellite' | 'terrain' | 'hybrid';
  markers?: google.maps.LatLngLiteral[];
  size?: Record<'height' | 'width', number>;
  zoom?: number;
  center: google.maps.LatLngLiteral[];
  language?: string;
}

const encodeCoordinates = (coordinates: google.maps.LatLngLiteral[]) =>
  coordinates.map(({ lat, lng }) => `${lat},${lng}`).join('|');

export const getGoogleStaticMapsUrl = ({
  center,
  language = 'es',
  mapType = 'roadmap',
  markers,
  size = { height: 640, width: 640 },
  zoom = 15,
}: GoogleMapsStaticParams) => {
  const params = [
    ['size', `${size.width}x${size.height}`],
    ['zoom', `${zoom}`],
    ['center', center && encodeCoordinates(center)],
    ['markers', markers && encodeCoordinates(markers)],
    ['language', language],
    ['maptype', mapType],
  ]
    .filter(([, value]) => !!value)
    .map(([name, value]) => `${name}=${value}`)
    .join('&');

  return encodeURI(
    `https://maps.googleapis.com/maps/api/staticmap?key=${process.env.GOOGLE_MAPS_STATIC}&${params}`,
  );
};
