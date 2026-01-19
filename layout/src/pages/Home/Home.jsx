import React from 'react';
import Banner from '@pages/Home/sections/Banner';
import NewCollection from '@pages/Home/sections/NewCollection';
import BestSeller from '@pages/Home/sections/BestSeller';
import OurPolicy from '@pages/Home/sections/OurPolicy';
import Subscribe from '@components/Subscribe/Subscribe';

const Home = () => {
  return (
    <>
      <Banner />
      <NewCollection />
      <BestSeller />
      <OurPolicy />
      <Subscribe />
    </>
  );
};

export default Home;
