import React, { useEffect, useState } from "react";
import Card from "./RentingCard";
import "./RentingCardList.css";
import { Link } from "react-router-dom";
import SearchDropdown from "../Sell_form/veg_sell_form/form_comp";
import rentOptions from "./rentOptions";

function BuyingCardList(props) {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://${process.env.REACT_APP_IP}/rent/getAllFarmers`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res = await data.json();
      setAllData(res.data);
      setData(res.data);
    }
    fetchData();
  }, []);

  const [service, setService] = useState(null);

  async function handleFilter() {
    var res = [];
    allData.map((e) => {
      if (e.service.toLowerCase() === service.value.toLowerCase()) res.push(e);
    });
    setData(res);
  }
  useEffect(() => {
    handleFilter();
  }, [service]);

  const onCategoryOptionClicked = (option) => {
    if (option.value !== "None") setService(option);
    else setData(allData);
  };

  var cardComponentArray = data.map((card) => {
    //  console.log(card)
    if (card.status === "pending") {
      return (
        <Card
          service_asked={card.service}
          id={card._id}
          name={card.name}
          area={card.area}
          price={card.price}
          loc={card.Address}
          date={card.date}
          dur_ar={card.duration}
          img_url={card.ip}
          email={card.email}
        />
      );
    }
  });
  useEffect(() => {
    const results = allData.filter((card) =>
      card.service.toLowerCase().includes(props.search.toLowerCase())
    );
    setData(results);
  }, [props.search]);

  return (
    <>
      <section
        class="text-gray-600 body-font overflow-hidden"
        style={{ width: "100%" }}>
        <div
          class="container sm:px-5 py-24 mx-auto"
          style={{ width: "100%", background: "none" }}>
          <div class=" divide-y-2 divide-gray-100">{cardComponentArray}</div>
        </div>
      </section>
    </>
  );
}

export default BuyingCardList;
