import React, { useEffect, useState } from "react";
import { AuthContext } from "../Content/context/AuthorizationContext";
import "./menu.css";

export default function Menu() {
  const useAuth = React.useContext(AuthContext);
  const [userChange, setuserChange] = useState("");

  useEffect(() => {
    setuserChange(useAuth?.currentUserDetails?.data);
  }, [useAuth?.currentUserDetails?.data]);

  return (
    <div className="menu">
      {" "}
      <input
        className="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label for="menu-icon"></label>
      <nav className="nav">
        <ul className="pt-5">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            {window?.screen?.availWidth < 640 ||
              (!useAuth?.currentUserDetails?.data && (
                <a href="/about-us">About Us</a>
              ))}
          </li>

          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <li>
              {useAuth?.currentUserDetails?.data && (
                <a href="/sell">Sell Products </a>
              )}
            </li>
          </li>
          <li>
            {!useAuth?.currentUserDetails?.data && (
              <a href="/signup">Sign Up </a>
            )}
          </li>
          <li>
            <a href="/farming-advisor">Farmer Advisor </a>
          </li>
          <li>
            {useAuth?.currentUserDetails?.data?.profiledata?.find((ele) => {
              return ele === "farmer";
            }) && <a href="/get-rent-service">Get Service </a>}
          </li>
          <li>
            {useAuth?.currentUserDetails?.data?.profiledata?.find((ele) => {
              return ele === "rentel-service";
            }) && <a href="/rent">Rent a Service </a>}
          </li>
          <li>
            {useAuth?.currentUserDetails?.data && (
              <a href="/userProfile">Profile </a>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
