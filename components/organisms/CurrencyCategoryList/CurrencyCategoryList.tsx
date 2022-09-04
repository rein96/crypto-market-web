import React from 'react';
import { CurrencyCategoryItem } from 'components/molecules';
import { categoryList } from 'constants/constants';
import Info from 'public/img/svg/info.svg';

const CurrencyCategoryList = () => {
  return (
    <div className='flex overflow-x-scroll hide-scroll-bar mb-4 pl-5 md:pl-0'>
      <div className='flex flex-nowrap'>
        {categoryList.map((category) => (
          <CurrencyCategoryItem
            key={category.name}
            category={category}
            icon={Info}
          />
        ))}
      </div>
    </div>
  );
};

export default CurrencyCategoryList;
