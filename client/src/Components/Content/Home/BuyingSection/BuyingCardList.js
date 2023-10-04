import React, { useEffect, useState } from "react";
import Card from "./BuyingCard";
import "./BuyingCardList.css";
import { Slide } from "react-awesome-reveal";
import Illustration from "../../../assets/lotti/illussion";

import { Link } from "react-router-dom";

function BuyingCardList() {
  const [data, setData] = React.useState([]);
  const [screenWidth, setScreenWidth] = useState(0);
  const [isLoading, setisLoading] = useState(false);
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    setisLoading(true);
    try {
      fetch(`https://${process.env.REACT_APP_IP}/product/get-products`)
        .then((response) => response.json())
        .then((data) => {
          setisLoading(false);
          setData(data.data);
          setShowData(data.data);
        });
    } catch (error) {
      setisLoading(false);
      console.log(error.message);
    }
  }, []);
  useEffect(() => {
    window?.screen.width >= 640 ? setScreenWidth(4) : setScreenWidth(6);
  }, [window.screen.width]);

  const filter_products = (e) => {
    var filter = e.target.value;
    var temp = [];
    data.map((item) => {
      if (item.category === filter) {
        temp.push(item);
      }
    });
    setShowData(temp);
  };
  var cardComponentArray = showData?.map((card, k) => {
    if (k < screenWidth) {
      return (
        <Card
          key={k}
          img_url={card?.ip}
          maxQuantity={card?.maxQuantity}
          minQuantity={card?.minQuantity}
          name={card?.name}
          description={card?.description}
          price={card?.price}
          id={card?._id}
        />
      );
    }
  });
  return (
    <>
      <div className="froot">
        <div className="placeImage" />
        <p class="title_font text-xs sm:text-3xl sm:mt-4">
          Fresh From our farm
        </p>
        <div>
          <h3 class="title_font title_text text-2xl sm:text-6xl">
            Featured Products
          </h3>
        </div>
        <div className="filter_options">
          <button
            onClick={(e) => {
              filter_products(e);
            }}
            value={"Vegetables"}
            type="button"
            class="filter_options_buttons p-0  text-white bg-yellow-400 sm:hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-xs sm:text-sm  text-center sm:mr-2 sm:mb-2 dark:focus:ring-yellow-900">
            Vegetables
          </button>
          <button
            onClick={(e) => {
              filter_products(e);
            }}
            value={"Fruits"}
            type="button"
            class="p-0 filter_options_buttons text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-xs sm:text-sm  text-center sm:mr-2 sm:mb-2 dark:focus:ring-yellow-900">
            Fruits
          </button>
          <button
            onClick={(e) => {
              filter_products(e);
            }}
            value={"Pulses"}
            type="button"
            class="p-0 filter_options_buttons text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-xs sm:text-sm  text-center sm:mr-2 sm:mb-2 dark:focus:ring-yellow-900">
            Pulses
          </button>
          <button
            value={"Dry Fruits"}
            onClick={(e) => {
              filter_products(e);
            }}
            type="button"
            class="p-0 filter_options_buttons text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full  text-xs sm:text-sm  text-center sm:mr-2 sm:mb-2 dark:focus:ring-yellow-900">
            Dry Fruits
          </button>
        </div>
        <Slide bottom triggerOnce>
          <div className=" flex flex-wrap justify-center  w-screen h-auto gap-3 sm:gap-20 ">
            {isLoading ? <Illustration /> : cardComponentArray}
          </div>
        </Slide>
        <Link to="/shop">
          <button
            type="button"
            class="w-40  bg-yellow-500  hover:bg-emerald-800 hover:text-white font-medium rounded-lg text-sm text-center mt-10 mr-2 mb-5 sm:mb-2 h-10">
            View more
          </button>
        </Link>
      </div>
    </>
  );
}

export default BuyingCardList;
