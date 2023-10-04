import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Carousel1.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function DemoCarousel() {
  return (
    <Carousel
      interval={3000}
      infiniteLoop={true}
      // autoPlay={true}
      width="60%"
      height="50%"
      showIndicators={false}
      showArrows={false}>
      <div className="carBack">
        <div class="item">
          <div class="shadow-effect">
            <img
              class="img-circle"
              src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
              alt=""
            />
            <div class="testimonial-name">EMILIANO AQUILANI</div>
          </div>
          <p className="test-text">
            Dramatically maintain clicks-and-mortar solutions without functional
            solutions. Completely synergize resource taxing relationships via
            premier niche markets. Professionally cultivate.
          </p>
        </div>
      </div>

      <div className="carBack">
        <div class="item">
          <div class="shadow-effect">
            <img
              class="img-circle"
              src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
              alt=""
            />
            <div class="testimonial-name">EMILIANO AQUILANI</div>
          </div>
          <p className="test-text">
            Dramatically maintain clicks-and-mortar solutions without functional
            solutions. Completely synergize resource taxing relationships via
            premier niche markets. Professionally cultivate.
          </p>
        </div>
      </div>

      <div className="carBack">
        <div class="item">
          <div class="shadow-effect">
            <img
              class="img-circle"
              src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
              alt=""
            />
            <div class="testimonial-name">EMILIANO AQUILANI</div>
          </div>
          <p className="test-text">
            Dramatically maintain clicks-and-mortar solutions without functional
            solutions. Completely synergize resource taxing relationships via
            premier niche markets. Professionally cultivate.
          </p>
        </div>
      </div>
    </Carousel>
  );
}

export default DemoCarousel;
