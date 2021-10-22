import React, { useEffect, useRef, useState } from 'react';

type VideoPlayerProps = {
  src: string;
  isActive: boolean;
};

function VideoPlayer({ src, isActive}: VideoPlayerProps): JSX.Element {
  const [, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.onloadeddata = () => setIsLoading(false);
    }

    return () => {
      if (videoRef.current !== null) {
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
    };
  }, [src]);

  useEffect(() => {
    let timeoutId;

    if (isActive) {
      // eslint-disable-next-line no-console
      console.log(src);
      timeoutId = setTimeout(() => videoRef.current?.play(), 1000);
    } else {
      videoRef.current?.load();
      clearTimeout(timeoutId);
    }
  }, [isActive, src]);

  return (
    <video
      ref={videoRef}
      src={src}
      className="player__video"
      muted
      width="280"
      height="175"
      preload='metadata'
    />
  );
}

export default VideoPlayer;

