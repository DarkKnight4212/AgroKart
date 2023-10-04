import React, { useEffect } from "react";
import DealsWeek from "./DealsOfTheWeek/DealsWeek";
import BuyingCardList from "./BuyingSection/BuyingCardList";
import RentingCardList from "./RentingSection/RentingCardList";
import Testimonial from "./Testimonial/Testimonial";
import WhatWeOffer from "./WhatWeOffer/WhatWeOffer";
import MainPage from "./MainPage/MainPage";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MainPage />
      <WhatWeOffer />
      <BuyingCardList />
      <DealsWeek />
      <RentingCardList />
      <Testimonial />
      {/* <Link to="/sell">SELL</Link> <Link to="/get-rent-service">RENT</Link> */}
    </>
  );
}

export default Home;
