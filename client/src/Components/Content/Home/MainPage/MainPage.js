import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import "./MainPage.css";

const MainPage = () => {
  return (
    <motion.div className="land-root py-20 sm:py-96 ">
      <div className="data-root sm:bottom-48">
        <div className="data-head mt-16  text-xl sm:text-6xl">
          <Slide>Welcome to </Slide>
          <div className="flex text-3xl sm:text-8xl bsdk">
            <Slide direction="up">Agro</Slide>
            <div style={{ color: "black" }}>
              <Slide direction="down">Kart</Slide>
            </div>
          </div>
        </div>

        <div className="data-moredata text-xs sm:text-xl  sm:flex">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "We are certified Agro-service company . This is one of the best platform for farmers to sell their products and for buyers to buy products directly from farmers."
                )
                .changeDelay(50)
                .start();
            }}
          />
        </div>
        <div className="butn hidden sm:flex text-2xl"><Link style={{color:"white"}} to="/about-us">Connect with us</Link></div>
      </div>
    </motion.div>
  );
};

export default MainPage;
