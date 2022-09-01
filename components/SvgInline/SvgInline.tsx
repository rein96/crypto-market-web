import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

interface SvgInlineProps {
  url: string;
  color?: string;
  size?: number;
}

/**
 * SvgInline will fetch SVG from server
 * Able to adjust color and size
 * If error (CORS), it will return Image component from next
 */
const SvgInline: React.FC<SvgInlineProps> = ({ url, color, size = 32 }) => {
  const ref = useRef(null);
  const [svg, setSvg] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    fetch(url, {
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.text())
      .then(setSvg)
      .catch(setIsErrored)
      .then(() => setIsLoaded(true));
  }, [url]);

  return (
    <>
      {isErrored && (
        <Image width={size} height={size} src={url} alt={'currency'} />
      )}
      {!isErrored && isLoaded && (
        <div
          ref={ref}
          style={{ color: color, width: size, height: size }}
          className={`svgInline svgInline--${isLoaded ? 'loaded' : 'loading'} ${
            isErrored ? 'svgInline--errored' : ''
          }`}
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      )}
    </>
  );
};

export default SvgInline;
