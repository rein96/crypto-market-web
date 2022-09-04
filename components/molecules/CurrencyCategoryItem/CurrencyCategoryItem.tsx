import Image from 'next/image';
import React from 'react';
import { CategoryListInterface } from 'types';

interface CurrencyCategoryItemProps {
  category: CategoryListInterface;
  icon: string;
  size?: number;
}

const CurrencyCategoryItem: React.FC<CurrencyCategoryItemProps> = ({
  category,
  icon,
  size = 20,
}) => {
  return (
    <div
      key={category.name}
      className='bg-custom-blue2 mr-2 px-2 py-0 lg:py-2 rounded-lg flex flex-row items-center cursor-pointer'
    >
      {/* Icon */}
      <div style={{ width: size, height: size }}>
        <Image src={icon} width={size} height={size} alt='info' />
      </div>

      {/* Text */}
      <p className='text-custom-blue1 ml-2 text-xs font-semibold'>
        {category.name}
      </p>
    </div>
  );
};

export default CurrencyCategoryItem;
