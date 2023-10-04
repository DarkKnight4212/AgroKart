import React, { useContext } from "react";
import FileBase from "react-file-base64";
import { useNavigate } from "react-router";
import "./veg_sell_form/veg_sell.css";
import { AuthContext } from "../context/AuthorizationContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Rent() {
  const [name, setName] = React.useState("");
  const [Address, setAddress] = React.useState("");
  const [service, setService] = React.useState("");
  const [date, setDate] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [area, setArea] = React.useState("");
  const [price, setPrice] = React.useState("");

  const useAuth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      Address: Address,
      service: service,
      date: date,
      duration: duration,
      area: area,
      price: price,
      email: useAuth.currentUser.email,
    };
    // console.log(data);
    const resp = await fetch(
      `https://${process.env.REACT_APP_IP}/rent/add-farmer`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const res = await resp.json();
    if (res.message === "Data added successfully") {
      toast.success("Data added successfully", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/rent");
    }
  };

  return (
    <div className="form_root">
      <h1>Enter Your Details to Rent Items</h1>
      <form>
        <div className="flexb">
          <label for="item-name">Your Name :</label>
          <input
            type="text"
            id="item-name"
            name="name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="flexb">
          <label for="item-address">Your Address :</label>
          <input
            type="text"
            id="item-address"
            name="address"
            required
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className="flexb">
          <label for="item-service">Service Required :</label>
          <input
            type="text"
            id="item-service"
            name="service"
            required
            onChange={(e) => {
              setService(e.target.value);
            }}
          />
        </div>
        <div className="flexb">
          <label for="item-date">From :</label>
          <input
            type="date"
            id="item-date"
            name="date"
            required
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div className="flexb">
          <label for="item-Duration">Duration(in days) :</label>
          <input
            type="number"
            id="item-Duration"
            name="duration"
            required
            onChange={(e) => {
              setDuration(e.target.value);
            }}
          />
        </div>
        <div className="flexb">
          <label for="item-area">Area of Land (in acre):</label>
          <input
            type="number"
            id="item-area"
            name="area"
            required
            onChange={(e) => {
              setArea(e.target.value);
            }}
          />
        </div>

        <div className="flexb">
          <label for="item-price">Item Fare per week:</label>
          <input
            type="text"
            id="item-price"
            name="price"
            required
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Rent;
