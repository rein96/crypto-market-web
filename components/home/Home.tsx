import React from 'react';
import DesktopCryptoMarket from 'components/DesktopCryptoMarket';
import MobileCryptoMarket from 'components/MobileCryptoMarket';
import useWindowResize from 'hooks/useWindowResize';

const Home = () => {
  const { width } = useWindowResize();

  /** Render Mobile Market only (perf) */
  const renderMobileMarket = width >= 768;

  /**R Render Desktop Market only (perf) */
  const renderDesktopMarket = width < 768;

  return (
    <div id='homepage'>
      {renderDesktopMarket && <MobileCryptoMarket />}
      {renderMobileMarket && <DesktopCryptoMarket />}
    </div>
  );
};

export default Home;
