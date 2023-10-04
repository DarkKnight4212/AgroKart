import React from "react";
import "./BuyingCardList.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthorizationContext";

function Card({ img_url, maxQuantity, minQuantity, name, price, id }) {
  const useAuth = useContext(AuthContext);
  const [hovered, setHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleHover = () => {
    window.screen.availWidth >= 640 && setHovered(!hovered);
  };
  const handleCart = async function () {
    if (!useAuth.currentUser) {
      toast.warn("Please Login to add product to cart", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      window.location.href = "/signin";
    }

    setIsLoading(true);
    const resp = await fetch(
      `https://${process.env.REACT_APP_IP}/cart/add-product`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          name,
          price,
          email: useAuth.currentUser.email,
          minQuantity,
          maxQuantity,
          quantity: minQuantity,
        }),
      }
    );
    const data = await resp.json();
    setIsLoading(false);
    if (data.message === "success") {
      // alert("Product Added to cart Succesfully");
      toast.success("Product Added to cart Succesfully", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // console.log("Product Added to cart Succesfully");
    } else if (data.message === "already added") {
      toast.warn("Product Already Added to cart", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // toast("Product Already Added to cart");
    } else {
      alert("Error");
    }
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className="card-root  h-40 w-24 sm:w-60 sm:h-80 flex flex-col items-around justify-around my-10   focus:border-2  sm:hover:border-2"
      style={{ borderRadius: "10px", backgroundColor: "#ffffff" }}
      onClick={() => window?.screen?.availWidth <= 640 && handleClick()}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}>
      <div
        className={`imgWrapper w-full h-full ${hovered ? "zoom" : "nozoom"}`}
        style={{
          backgroundImage: `url(${img_url})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}>
        <div
          className={`w-8 h-8 p-2 rounded-4xl -m-2 ${
            hovered ? "card_icon" : "card_icon_hidden"
          } `}>
          <ShoppingCartOutlinedIcon
            style={{
              borderRadius: "20px",
              backgroundColor: "#dcdcdcba",
            }}
            onClick={handleCart}
          />
          <SearchIcon
            style={{
              width: "2rem",
              height: "2rem",
              padding: "0.5rem",
              borderRadius: "2rem",
              backgroundColor: "#dcdcdcba",
              margin: "-0.5rem",
            }}
            onClick={() => handleClick()}
          />
        </div>
      </div>
      <div
        className="card-info w-full  h-1/3  flex flex-col items-center justify-center  "
        style={{
          marginTop: "-25px",
          marginRight: "-20px",
          backgroundColor: "White ",
          borderRadius: "10px",
          zIndex: 2,
          padding: "10px",
        }}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <div className="card-name text-xs sm:text-xl placeholder:Loading...">
              {name}
            </div>
            <div
              className="card-price text-sm sm:text-2xl"
              style={{ color: "#01b000" }}>
              ₹ {price}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
