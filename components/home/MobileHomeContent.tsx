import { SvgInline } from 'components/SvgInline';
import React from 'react';

const MobileHomeContent: React.FC = () => {
  return (
    <div id='mobile-home-content' className=''>
      {/* Crypto 'Table' */}
      <div className='mobile-home-container'>
        {/* Header */}
        <div className='mobile-header flex p-4 items-center'>
          <div className='mobile-header-left-side font-bold text-sm text-custom-grey flex-1'>
            CRYPTO
          </div>
          <div className='mobile-header-right-side pl-4'>
            <select className='border rounded-md'>
              <option>24 JAM</option>
              <option>1 MGG</option>
              <option>1 BLN</option>
              <option>1 THN</option>
            </select>
          </div>
        </div>
        {/* Body */}
        <div className='mobile-body-content'>
          {/* Crypto list */}
          <div className='mobile-body-list p-4 flex items-center border-t'>
            <SvgInline url='https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_BTC.svg' />

            {/* Content container */}
            <div className='mobile-body-list-content pl-6 flex-1 flex flex-row'>
              {/* Left text content */}
              <div className='mobile-body-list-content-left flex-1'>
                <p className='text-base font-semibold'>Bitcoin</p>
                <p className='text-custom-grey text-sm'>BTC</p>
              </div>

              {/* Right text content */}
              <div className=''>
                <p className='text-custom-black font-semibold'>
                  Rp 123.123.123
                </p>
                <p className='text-loss text-right'>7.00%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHomeContent;
