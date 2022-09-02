import React from 'react';
import classNames from 'classnames';
import { ArrowDown, ArrowUp } from 'components/common';

const useRenderPercentage = () => {
  /** Return percentage element with color */
  const renderPercentage = (percentage: string): React.ReactNode => {
    if (!percentage)
      return (
        <p className='flex justify-end' style={{ justifyContent: 'end' }}>
          0.00%
        </p>
      );

    const isNegative = percentage[0] === '-';

    const isZero = percentage === '0.00';

    const isPlus = !isNegative && !isZero;

    const renderArrow = () => {
      if (isNegative) return <ArrowDown />;

      if (isPlus) return <ArrowUp />;

      return <div />;
    };

    return (
      <div className={'flex justify-end'} style={{ justifyContent: 'end' }}>
        {renderArrow()}
        <p
          className={classNames('flex justify-end', {
            'text-loss': isNegative,
            'text-custom-black': isZero,
            'text-profit': isPlus,
          })}
        >
          {percentage}%
        </p>
      </div>
    );
  };

  return { renderPercentage };
};

export { useRenderPercentage };
