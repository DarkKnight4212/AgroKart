import React, { useContext } from "react";
import "./RentingCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../context/AuthorizationContext.js";
import tractor_img from "./images/tractor.jpg";
import harvestor_img from "./images/harvestor.jpg";

function Card({
  service_asked,
  id,
  name,
  area,
  price,
  address,
  date,
  duration,
  img_url,
  email,
}) {
  const useAuth = useContext(AuthContext);
  const handleClick = async () => {
    const response = await fetch(
      `https://${process.env.REACT_APP_IP}/rent/add-provider`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          email,
          cu_email: useAuth.currentUser.email,
        }),
      }
    );
    const res = await response.json();
    if (res.message == "Data added successfully") {
      toast.success("Provider added successfully", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      window.location.reload();
    }
  };
  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "fit-content",
      backgroundColor: "#F9F5E9",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      borderRadius: "8px",
      overflow: "hidden",
      marginBottom: "3rem",
      justifyContent: "space-between",
    },
    imageContainer: {
      width: "30%",
      height: "100%",
      display: "flex",
      alignItems: "center",
    },
    image: {
      width: "100%",
      height: "100%",
    },
    contentContainer: {
      width: "65%",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
    },
    name: {
      fontSize: "3rem",
      fontWeight: "bold",
      margin: "0 0 10px 0",
      textAlign: "center",
      alignSelf: "flex-start",
    },
    name1: {
      fontSize: "2rem",
      fontWeight: "bold",
      margin: "0 0 10px 0",
      textAlign: "center",
      alignSelf: "flex-start",
    },
    stars: {
      fontSize: "16px",
      margin: "0 0 10px 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    star: {
      color: "#ffd700",
    },
    description: {
      fontSize: "16px",
      margin: "0 0 10px 0",
      textAlign: "justify",
    },
    price: {
      fontSize: "24px",
      fontWeight: "bold",
      margin: "0 10px 0 0",
    },
    button: {
      fontSize: "16px",
      fontWeight: "bold",
      padding: "10px 20px",
      backgroundColor: "#008CBA",
      color: "#fff",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
      alignSelf: "flex-end",
    },
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.imageContainer} className="hidden sm:block">
          <img src={img_url} alt="Placeholder" style={styles.image} />
        </div>
        <div style={styles.contentContainer}>
          <h1 style={styles.name1}>{name}</h1>
          <h2 style={styles.name}>{service_asked}</h2>

          <p style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit
            amet mi lacus. Praesent suscipit nulla vel nunc faucibus, ac finibus
            dolor luctus.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-end",
            }}>
            <span style={styles.price}>${price}</span>
            <button style={styles.button} onClick={handleClick}>
              Book Service
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
