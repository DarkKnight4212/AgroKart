import React from "react";

import { BsArrowRight } from "react-icons/bs";

const Checkout = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}>
        <span className="ms-2 px-3 py-2" style={{}}>
          3 items
        </span>
        <span className="me-2 px-3 py-2" style={{}}>
          $ 69
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}>
        <span className="ms-2 px-3 py-2" style={{}}>
          Shipping
        </span>
        <span className="me-2 px-3 py-2" style={{}}>
          $ 2
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "5%",
        }}>
        <span className="ms-2 px-3 py-2" style={{}}>
          tax
        </span>
        <span className="me-2 px-3 py-2" style={{}}>
          $ 1
        </span>
      </div>

      <div className="checkout-total-line"></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}>
        <span className="ms-2 p-3">
          <span style={{ fontSize: "1.8rem" }}>
            <b>Total</b>
          </span>
          <span style={{ fontSize: "1.4rem" }}> (tax inc.)</span>
        </span>
        <span
          className="me-2 p-3"
          style={{ fontSize: "1.2rem", display: "flex", alignItems: "center" }}>
          $100
        </span>
      </div>
      <div className="checkout-total-line"></div>

      <div
        className="mt-4"
        style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div class="wrapper mb-3" style={{}}>
          <a className="wrapper-a py-2 px-3" href="#">
            <span className="wrapper-span">
              <b>Checkout</b>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
