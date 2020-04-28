import React, { useMemo } from 'react';

interface Props {
  src: string;
  height?: number;
  width?: number;
  allowFullScreen?: boolean;
  className?: string;
}

export const YoutubeEmbed = ({
  className,
  src,
  width,
  height,
  allowFullScreen,
}: Props) => {
  const embedUrl = useMemo(() => {
    const url = new URL(src);
    const id = new URLSearchParams(url.search).get('v');
    return `https://www.youtube.com/embed/${id}`;
  }, [src]);

  return (
    <iframe
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen={allowFullScreen}
      className={className}
      frameBorder="0"
      height={height}
      src={embedUrl}
      title={src}
      width={width}
    />
  );
};
