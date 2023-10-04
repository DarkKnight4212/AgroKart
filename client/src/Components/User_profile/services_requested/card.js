import React from "react";
import "./card.css";

const Card = ({ data }) => {
  const { name, duration, date, price, service, status, ip, area } = data;
  return (
    <div className="card">
      <img className="image" src={ip} alt={name} />
      <div className="details">
        <div className="name">{name}</div>
        <div className="date">required: {date}</div>
        <div className="area">area to work on (*acre): {area}</div>

        <div className="time">{duration} days</div>
        <div className="price">${price}</div>
        <div className="service">{service}</div>
        <div
          className={`status ${
            status === "accepted" ? "text-green-600" : "text-amber-400"
          }`}>
          {status}
        </div>
      </div>
    </div>
  );
};

export default Card;
