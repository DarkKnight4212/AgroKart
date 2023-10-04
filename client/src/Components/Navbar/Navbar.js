import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { AuthContext } from "../Content/context/AuthorizationContext";

import "./navbar.css";
import logoImg from "./images/Agrokart logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Navbar() {
  const useAuth = React.useContext(AuthContext);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 30,
    restDelta: 0.01,
  });

  return (
    <nav className={scroll ? "navbar navbar-scroll" : "navbar"}>
      <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      <div className="navbar-logo -mx-4 -my-4">
        <img className=" h-10 sm:h-20" src={logoImg}></img>
      </div>
      <ul className="navbar-links font-semibold">
        <li>
          <Link to="/" className={scroll ? "hover-a" : "navbar-links-a"}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about-us"
            className={scroll ? "hover-a" : "navbar-links-a"}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/shop" className={scroll ? "hover-a" : "navbar-links-a"}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="/signup" className={scroll ? "hover-a" : "navbar-links-a"}>
            {useAuth?.currentUserDetails?.data ? "Profile" : " Log In"}
          </Link>
        </li>
        <li>
          <Link to="/cart" className={scroll ? "hover-a" : "navbar-links-a"}>
            <ShoppingCartIcon />
          </Link>
        </li>
        <li className={`text-white ${scroll ? "hover-a" : "navbar-links-a"}`}>
          <MenuIcon className="opacity-0" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
