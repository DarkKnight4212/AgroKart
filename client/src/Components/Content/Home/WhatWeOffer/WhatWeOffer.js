import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import "./WhatWeOffer.css";
import img1 from "../image/freshVegetables_mini.jpg";
import img2 from "../image/tractorServices_mini.jpg";
import img3 from "../image/farming_adviser_mini.jpg";
import page_seprater from "../image/page_seprater.png";

const WhatWeOffer = () => {
  return (
    <>
      <div className="offer-root">
        <div className="bg_circle1" />
        <div className="bg_circle2" />
        <section className="text-gray-600 body-font ">
          <div
            className="container sm:px-5 sm:py-24 sm:mx-auto  "
            style={{
              width: "100vw",
              boxShadow: "none",
              background: "none",
            }}>
            <div className="flex flex-col text-center w-full sm:mb-20 -mt-6">
              <div className="what_are_our_services text-2xl sm:text-5xl text-white sm:py-10 py-8">
                Our Services
              </div>
              <img
                src={page_seprater}
                className="w-48 sm:w-96 flex  self-center -m-16 sm:-m-24 pb-10"
              />
              <div className="flex flex-wrap w-full  justify-center  sm:justify-around sm:m--3 sm:pl-10 sm:pr-10 mobile-hidden">
                <div className="flex flex-wrap w-full h-36 sm:h-48 sm:w-1/3  ">
                  <div className=" p-4 w-full h-full">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="what_offer_container fresh_veges flex rounded-l sm:rounded-lg h-full  sm:h-80 p-8 flex-col">
                      <div className="know_more">
                        <Fade direction="down" className="heading">
                          Marketplace
                        </Fade>
                        <p
                          style={{ fontFamily: "sans-serif" }}
                          className="none">
                          We offer fresh vegetables from farms all over india{" "}
                        </p>

                        <Link
                          to="/shop"
                          className="text-green-600 inline-flex items-center md:mb-2 lg:mb-0">
                          {" "}
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="flex flex-wrap w-full h-36 sm:h-48  sm:w-1/3">
                  <div className=" p-4 w-full">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="what_offer_container rental_services flex rounded-lg sm:h-80 p-8 flex-col">
                      <div className="know_more">
                        <Fade direction="down" className="heading">
                          Rental Services
                        </Fade>
                        <p style={{ fontFamily: "sans-serif" }}>
                          You can opt for various farm related services
                        </p>
                        <Link
                          to="/rent"
                          className="text-green-600 inline-flex items-center md:mb-2 lg:mb-0">
                          {" "}
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="flex flex-wrap w-full  h-36 sm:h-48 sm:w-1/3">
                  <div className=" p-4 w-full">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="what_offer_container farming_advicer flex rounded-lg sm:h-80 p-8 flex-col">
                      <div className="know_more">
                        <Fade direction="down" className="heading">
                          Farming Advisor
                        </Fade>
                        <p style={{ fontFamily: "sans-serif" }}>
                          You can use our multiple ML models to predict farming
                          related stuffs
                        </p>
                        <Link
                          to="/farming-advisor"
                          className="text-green-600 inline-flex items-center md:mb-2 lg:mb-0">
                          {" "}
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font mobile-visible">
          <div
            class="container px-5 py-24 mx-auto"
            style={{ background: "none", boxShadow: "none" }}>
            <div class="flex flex-wrap -m-4">
              <div class="p-4 md:w-1/3 " style={{ height: "fit-content" }}>
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={img1}
                    alt="blog"
                    style={{ height: "45%" }}
                  />
                  <div class="p-6 bg-white">
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Marketplace
                    </h1>
                    <p class="leading-relaxed mb-3">
                      We offer fresh vegetables from farms all over india
                    </p>
                    <div class="flex items-center flex-wrap justify-center">
                      <Link
                        to="/shop"
                        class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 ">
                        Learn More
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font mobile-visible">
          <div
            class="container px-5 py-24 mx-auto"
            style={{ background: "none", boxShadow: "none" }}>
            <div class="flex flex-wrap -m-4">
              <div class="p-4 md:w-1/3" style={{ height: "fit-content" }}>
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={img2}
                    alt="blog"
                    style={{ height: "45%" }}
                  />
                  <div class="p-6 bg-white">
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Rental Services
                    </h1>
                    <p class="leading-relaxed mb-3">
                      You can opt for various farm related services
                    </p>
                    <div class="flex items-center flex-wrap justify-center">
                      <Link
                        to="/rent"
                        class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 ">
                        Learn More
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font mobile-visible">
          <div
            class="container px-5 py-24 mx-auto"
            style={{ background: "none", boxShadow: "none" }}>
            <div class="flex flex-wrap -m-4">
              <div class="p-4 md:w-1/3 " style={{ height: "fit-content" }}>
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={img3}
                    alt="blog"
                    style={{ height: "45%" }}
                  />
                  <div class="p-6 bg-white">
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Farming Advisor
                    </h1>
                    <p class="leading-relaxed mb-3">
                      You can use our multiple ML models to predict farming
                      related stuffs
                    </p>
                    <div class="flex items-center flex-wrap justify-center">
                      <Link
                        to="/farming-advisor"
                        class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 ">
                        Learn More
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhatWeOffer;
