import React, { useState, useEffect } from "react";
import "./dealsweek.css";
import Clock from "./Clock";

function DealsWeek() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("May 30,2023 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);
      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <>
      <div className="droot">
        <h1
          className="text-2xl sm:text-6xl pt-4 sm:pt-12 heading-sec"
          style={{ fontWeight: "800" }}>
          Deals of The Week
        </h1>
        <section class="text-gray-600 body-font w-screen">
          <div class=" px-2 sm:px-5 py-12 sm:py-24 mx-auto flex flex-wrap  w-screen">
            <div
              class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden bg-white flex justify-center content-center"
              style={{ alignItems: "center" }}>
              <img
                alt="feature"
                className="object-cover object-center h-5/6 w-5/6 img-flui"
                src="https://image.lexica.art/full_jpg/64a52a2f-79bf-4929-bc9d-9722fbfff126"
              />
            </div>
            <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div class="flex flex-col mb-10 lg:items-start items-center">
                <div class="flex-grow">
                  <h2 class="text-orange-500 text-xl title-font font-medium mb-3 text-left">
                    _________
                  </h2>
                  <h2 className="item-name text-xl sm:text-5xl text-left text-gray-900 py-4 hover:text-orange-600">
                    Quisqiue Voluptas
                  </h2>
                  <h2 className="text-left">
                    <span className="text-l text-left text-orange-600">
                      ₹ 999
                    </span>
                  </h2>
                  <p
                    class="leading-relaxed text-xs sm:text-base w-3/4 py-4 text-left"
                    style={{ fontFamily: "sans-serif" }}>
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <Clock
                    timerDays={timerDays}
                    timerHours={timerHours}
                    timerMinutes={timerMinutes}
                    timerSeconds={timerSeconds}
                  />
                  <a class="mt-3 text-indigo-500 inline-flex items-center btn-cart">
                    Add to Cart
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default DealsWeek;
