import React, { useRef, useState } from "react";
import img from "../image/farmer.png";
import img1 from "../image/farmer1.png";
import "./Testimonial.css";
import ladki from "../../../assets/1.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const slide = [
  {
    id: 1,
    img: ladki,
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availabl",
  },
  {
    id: 2,
    img: img1,
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availabl",
  },
  // {
  //   id: 3,
  //   img: "https://picsum.photos/200/300",
  //   desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is availabl",
  // },
];
const delay = 2500; 

export default function Testimonial() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slide.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, []);

  return (
    <>
    <div
      className="testimonials"
      style={{ flexDirection: "column", alignItems: "center",height:"auto" }}>
      <h1 className="headerLOL">Testimonials</h1>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          {slide.map((slide, index) => (
            <>
            <div className="slide" key={index}>
              <div className="testimonialsTemp"
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "space-around",
                  minHeight:"33rem"
                }}>
                <div className="image_circle" />
                <img src={slide.img} className="testimonial_image mt-28" />
                <div className="py-24" style={{ width: "55%" }}>
                  <h1 className="text-white text-3xl testHead">
                    "The Best in Town"
                  </h1>
                  <p
                    className="testimonial_desc text-white"
                    style={{ fontFamily: "sans-serif" }}>
                    {slide.desc}
                  </p>
                </div>
              </div>
            </div>
            <div className="mobile-Test">


            </div></>
          ))}
        </div>

        <div className="slideshowDots">
          {slide.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}></div>
          ))}
        </div>
      </div>
    </div>
      <div className="mobile-Test">
      <div className="headmobile">Testimonials</div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4 test-root">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={img}/>
          <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
          <p class="text-gray-500">Senior Product Designer</p>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4 test-root">
        <div class="h-full text-center" >
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={img1} />
          <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
          <p class="text-gray-500">Senior Product Designer</p>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4 test-root">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={img} />
          <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
          <p class="text-gray-500">Senior Product Designer</p>
        </div>
      </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
    </>
  );
}
