import React, { useEffect, useRef, useState } from 'react';

type VideoPlayerProps = {
  src: string;
  isActive: boolean;
  poster: string;
};

function VideoPlayer({ src, isActive, poster}: VideoPlayerProps): JSX.Element {
  const [, setVideoPlayError] = useState('');

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

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
    }

    return () => clearTimeout(timeoutId);
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

