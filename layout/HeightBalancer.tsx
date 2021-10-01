import { FC, useEffect, useRef, useState, ReactElement, ReactNode, CSSProperties } from 'react';

interface HeightBalancerProps {
  children?: ReactNode[] | ReactNode;
}

const HeightBalancer: FC<HeightBalancerProps> = (props): ReactElement => {
  const elem = useRef<null | HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});

  function handleStyle () {
    if (elem.current && window) {
      const currentHeight: number = elem.current.clientHeight;
      const windowHeight: number = window.innerHeight;
      const adjustHeight: boolean = currentHeight < windowHeight;

      setStyle({ height: adjustHeight ? '100vh' : 'auto' });
    }
  };

  useEffect(handleStyle, []);

  return <div style={style} ref={elem}>{props.children}</div>;
}

export default HeightBalancer;