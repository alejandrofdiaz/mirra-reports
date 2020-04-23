import { googleMapsUrl } from 'lib/googleMaps';
import React, { useEffect, useRef, useState } from 'react';

const useGoogleMaps = () => {
  const [googleConstructor, setGoogleConstructor] = useState<typeof google>();
  const googleMapsScriptsId = 'googleMapsScript';
  useEffect(() => {
    const scriptDom = document.getElementById(googleMapsScriptsId);
    if (google) {
      setGoogleConstructor(google);
    } else if (!scriptDom) {
      const script = document.createElement('script');
      script.id = googleMapsScriptsId;
      script.src = googleMapsUrl;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setGoogleConstructor(google);
      };
      document.body.appendChild(script);
    }
  }, []);
  return googleConstructor;
};

interface MarkerInfo {
  label: string;
  id: string;
  location: google.maps.LatLngLiteral;
}

interface MapProps {
  center: google.maps.LatLngLiteral;
  zoom?: number;
  markers?: MarkerInfo[];
}

export const Map = ({ center, zoom = 15 }: MapProps) => {
  const domRef = useRef<HTMLDivElement>();
  const mapRef = useRef<google.maps.Map>();
  const googleConstructor = useGoogleMaps();

  useEffect(() => {
    if (googleConstructor) {
      mapRef.current = new googleConstructor.maps.Map(domRef.current, {
        center,
        zoom,
      });
    }
  }, [!!googleConstructor]);

  return (
    <>
      <div className="map" ref={domRef}>
        test
      </div>
    </>
  );
};
