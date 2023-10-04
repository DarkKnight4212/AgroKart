import React, { useState, useEffect, useContext } from "react";
import SearchBar from "./search";
import { getUser } from "../../../../api/getUser";
import { AuthContext } from "../../../../Content/context/AuthorizationContext";
import Illstration from "../../../../assets/lotti/illussion";
import Card from "../../../Home/BuyingSection/BuyingCard";
import "./ProductSection.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import banner from "../../../../assets/Shop white text.png";

function ProductSection() {
  const [currentPage, setcurrentPage] = useState(1);
  const [isLoading, setisLoading] = useState(false);
  const useAuth = useContext(AuthContext);

  const displayCard = window?.screen?.availWidth < 640 ? 15 : 20;

  useEffect(() => {
    async function fetchData() {
      if (useAuth.currentUser) {
        try {
          await getUser(useAuth?.currentUser?.email).then((result) => {});
        } catch (error) {
          console.log(error.message);
        }
      }
    }
    fetchData();
  }, [useAuth.currentUser]);

  var verticalLineStyle = {
    backgroundColor: "white",
    minHeight: "100vh",
    borderRadius: "0px",
    paddingTop: "3rem",
  };

  var horizontalLine = {
    width: "86%",
  };

  const [data, setData] = React.useState([]);
  const [allData, setAllData] = React.useState([]);
  const [page, setPage] = React.useState(8);
  useEffect(() => {
    try {
      setisLoading(true);
      fetch(`https://${process.env.REACT_APP_IP}/product/get-products`)
        .then((response) => response.json())
        .then((data) => {
          setisLoading(false);
          setAllData(data.data);
          setData(data.data);
        });
    } catch (error) {
      console.log(error.message);
      setisLoading(false);
    }
  }, []);

  const pagination = (e = 1) => {
    setcurrentPage(Number(e));
    var temp = [];
    for (let i = 0; i < allData.length - (e - 1) * 15; i++) {
      temp[i] = allData[i + (e - 1) * 15];
    }
    setData(temp);
    window.scrollTo(0, 0);
  };

  var cardComponentArray = data.map((card, i) => {
    if (i < displayCard) {
      return (
        <Card
          key={i}
          minQuantity={card?.minQuantity}
          maxQuantity={card?.maxQuantity}
          img_url={card?.ip}
          name={card?.name}
          description={card?.description}
          price={card?.price}
          id={card?._id}
        />
      );
    }
  });

  const [searchResults, setSearchResults] = useState("");
  const handleSearch = (query) => {
    console.log(query);
    const results = allData.filter((card) =>
      card.name
        .split(" ")
        .join("")
        .toLowerCase()
        .includes(query.split(" ").join("").toLowerCase())
    );
    setData(results);
    if (query === "") {
      setSearchResults([]);
      setData(allData);
    }
  };

  const [e, setE] = React.useState(2);

  const filterSort = (e) => {
    if (e === 1) {
      var newData = data.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
      setData(newData);
    } else if (e === 0) {
      var newData = data.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
      setData(newData);
    } else {
      setData(allData);
    }
  };

  useEffect(() => {
    filterSort(e);
  }, [e]);

  const filterData = (named) => {
    var newData = allData.filter((card) =>
      card.category.toLowerCase().includes(named.toLowerCase())
    );
    setData(newData);
  };

  return (
    <div className="flex justify-center">
      {isLoading ? (
        <Illstration />
      ) : (
        <div className="fluid-container ">
          <div>
            <img src={banner} alt="err" />
          </div>
          <div className="row" style={{ padding: "18px" }}>
            <div className="col-2 w-1/6">
              <div className="row w-full" style={{ marginTop: "1.58%" }}>
                <label className="mx-0 mb-5 w-full flex">
                  <div className="  text-black  text-sm sm:text-l">
                    Sort by:
                  </div>
                  <select
                    onChange={(e) => {
                      setE(e.target.options.selectedIndex);
                    }}
                    name="price-select"
                    className="ms-4  h-7 rounded-md border 1px solid border-slate-400"
                    style={
                      {
                        // border: "1px solid black",
                      }
                    }>
                    <option>High to Low</option>
                    <option>Low to High</option>
                    <option selected={true}>Recommended </option>
                  </select>
                </label>
              </div>

              <div className="row filter-col">
                {/* Head of Filter component */}
                <div className="row">
                  <div
                    className="text-center pb-3  text-black"
                    style={{ fontSize: "20px" }}>
                    Categories
                  </div>
                </div>

                {/* Main body of filter component */}
                <div className="row">
                  <div className="col-8">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="fruits"
                        id="form-check-1"
                        style={{ border: "1px solid black", left: "40px" }}
                        onClick={(e) => {
                          if (e.target.checked === true) {
                            filterData(e.target.name);
                          } else {
                            setData(allData);
                          }
                        }}
                      />
                      <label
                        className="form-check-label mt-1 ms-2"
                        for="flexCheckDefault">
                        Fresh Fruits
                      </label>
                    </div>
                  </div>
                  <div className="col-4">
                    <span className="float-end">
                      {
                        allData.filter((card) =>
                          card?.category
                            .toLowerCase()
                            .includes("fruits".toLowerCase())
                        ).length
                      }
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="vegetables"
                        id="form-check-2"
                        style={{ border: "1px solid black", left: "40px" }}
                        onClick={(e) => {
                          if (e.target.checked === true) {
                            filterData(e.target.name);
                          } else {
                            setData(allData);
                          }
                        }}
                      />
                      <label
                        className="form-check-label mt-1 ms-2"
                        for="flexCheckDefault">
                        Fresh Vegetables
                      </label>
                    </div>
                  </div>
                  <div className="col-4">
                    <span className="float-end">
                      {
                        allData.filter((card) =>
                          card.category
                            .toLowerCase()
                            .includes("vegetables".toLowerCase())
                        ).length
                      }
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="form-check-3"
                        name="pulses"
                        style={{ border: "1px solid black", left: "40px" }}
                        onClick={(e) => {
                          if (e.target.checked === true) {
                            filterData(e.target.name);
                          } else {
                            setData(allData);
                          }
                        }}
                      />
                      <label
                        className="form-check-label mt-1 ms-2"
                        for="flexCheckDefault">
                        Pulses
                      </label>
                    </div>
                  </div>
                  <div className="col-4">
                    <span className="float-end">
                      {
                        allData.filter((card) =>
                          card.category
                            .toLowerCase()
                            .includes("pulses".toLowerCase())
                        ).length
                      }
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="form-check-3"
                        name="grains"
                        style={{ border: "1px solid black", left: "40px" }}
                        onClick={(e) => {
                          if (e.target.checked === true) {
                            filterData(e.target.name);
                          } else {
                            setData(allData);
                          }
                        }}
                      />
                      <label
                        className="form-check-label mt-1 ms-2"
                        for="flexCheckDefault">
                        Grains
                      </label>
                    </div>
                  </div>
                  <div className="col-4">
                    <span className="float-end">
                      {
                        allData.filter((card) =>
                          card.category
                            .toLowerCase()
                            .includes("grain".toLowerCase())
                        ).length
                      }
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="form-check-4"
                        name="dry fruits"
                        style={{ border: "1px solid black", left: "40px" }}
                        onClick={(e) => {
                          if (e.target.checked === true) {
                            filterData(e.target.name);
                          } else {
                            setData(allData);
                          }
                        }}
                      />
                      <label
                        className="form-check-label mt-1 ms-2"
                        for="flexCheckDefault">
                        Dry Fruits
                      </label>
                    </div>
                  </div>
                  <div className="col-4">
                    <span className="float-end">
                      {
                        allData.filter((card) =>
                          card.category
                            .toLowerCase()
                            .includes("dry fruits".toLowerCase())
                        ).length
                      }
                    </span>
                  </div>
                </div>

                {/* Bottom part of Filter component */}

                {/* Horizontal line */}
                <div className="mt-3 mx-auto" style={horizontalLine}></div>
              </div>
            </div>

            <div className="col-10 products-col">
              {/* <Products checklth={lth} checkhtl={htl} /> */}
              <SearchBar onSearch={handleSearch} />
              <div
                className="flex justify-center mb-0"
                style={{ margin: "60px 0 60px 0" }}>
                <hr style={{ marginLeft: "-2%", width: "100%" }} />
              </div>
              <div
                className="row justify-content-around rounded-none flex flex-wrap gap-3 sm:gap-6 border-r-10 border-2 border-slate-600 px-3 sm:px-5"
                style={{ ...verticalLineStyle, backgroundColor: "white" }}>
                {cardComponentArray}
              </div>

              <div className="full-width mt-4 mb-5">
                <div className="">
                  <MdArrowBackIosNew />
                </div>
                <div
                  className={`view-more-circle cursor-pointer  ${
                    currentPage === 1 ? "active" : ""
                  }`}
                  id={1}
                  onClick={(e) => {
                    pagination(e.target.id);
                  }}>
                  1
                </div>
                <div
                  className={`view-more-circle cursor-pointer  ${
                    currentPage === 2 ? "active" : ""
                  }`}
                  id={2}
                  onClick={(e) => {
                    setcurrentPage(2);
                    pagination(e.target.id);
                  }}>
                  2
                </div>
                <div
                  className={`view-more-circle cursor-pointer ${
                    currentPage === 3 ? "active" : ""
                  }`}
                  id={3}
                  onClick={(e) => {
                    pagination(e.target.id);
                  }}>
                  3
                </div>
                <div className="">
                  <MdArrowForwardIos />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductSection;
