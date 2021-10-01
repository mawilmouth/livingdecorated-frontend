import { CSSProperties, FC, ReactElement, useState, useEffect } from 'react';

interface ScalableImageProps {
  src: string;
  alt?: string;
  scale?: number;
}

const ScalableImage: FC<ScalableImageProps> = ({ src, alt, scale = 1.1 }): ReactElement => {
  const [hover, setHover] = useState<boolean>(false);
  const [imageStyle, setImageStyle] = useState<CSSProperties>({});

  function onEnter () {
    setHover(true);
  }

  function onExit () {
    setHover(false);
  }

  useEffect(() => {
    setImageStyle(hover ? { transform: `scale(${scale})` } : {});
  }, [hover]);

  return (
    <div className="scalable-image" onMouseEnter={onEnter} onMouseLeave={onExit}>
      <img style={imageStyle} className="image" src={src} alt={alt} />
    </div>
  );
}

export default ScalableImage;