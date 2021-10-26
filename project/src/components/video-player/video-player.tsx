import React, { useEffect, useRef, useState } from 'react';

type VideoPlayerProps = {
  src: string;
  isActive: boolean;
  poster: string;
};

function VideoPlayer({ src, isActive, poster}: VideoPlayerProps): JSX.Element {
  const [, setIsLoading] = useState(true);
  const [, setVideoPlayError] = useState('');

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
      timeoutId = setTimeout(
        () =>
          videoRef.current
            ?.play()
            .catch((error) => {
              setVideoPlayError('Video cannot be loaded');
            }),
        1000,
      );
    } else {
      videoRef.current?.load();
      clearTimeout(timeoutId);
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className="player__video"
      muted
      width="280"
      height="175"
      autoPlay={isActive}
    />
  );
}

export default VideoPlayer;

