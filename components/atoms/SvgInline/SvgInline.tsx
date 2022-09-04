import Image from 'next/image';
import SVG from 'react-inlinesvg';
import React, { useState } from 'react';

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
  const [isError, setIsError] = useState(false);

  /** One of the errors could be CORS error */
  const handleError = () => {
    setIsError(true);
  };

  return (
    <>
      {isError && (
        <Image width={size} height={size} src={url} alt={'currency'} />
      )}
      {!isError && (
        <SVG
          src={url}
          style={{ color, width: size, height: size }}
          onError={handleError}
        />
      )}
    </>
  );
};

export default SvgInline;
