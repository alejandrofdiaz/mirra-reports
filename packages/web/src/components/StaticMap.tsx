import classnames from 'classnames';
import { getGoogleStaticMapsUrl, GoogleMapsStaticParams } from 'lib/googleMaps';
import React, { useMemo } from 'react';

interface StaticMapProps extends GoogleMapsStaticParams {
  className?: string;
  alt?: string;
}

export const StaticMap = (props: StaticMapProps) => {
  const url = useMemo(() => getGoogleStaticMapsUrl(props), [props]);

  const { className, alt } = props;

  return (
    <img
      alt={alt}
      className={classnames({
        staticMap: true,
        [className]: className,
      })}
      src={url}
    />
  );
};
