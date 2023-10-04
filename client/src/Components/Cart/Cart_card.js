import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import LoadingImg from "../assets/loading.png";
import DeleteIcon from "@mui/icons-material/Delete";

const HorizontalCard = ({
  img_url,
  name,
  maxQuantity,
  minQuantity,
  quantity,
  price,
  id,
  updateFeilds,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.4%",
        border: "1px solid #ccc",
        borderRadius: "4px",
        margin: "auto",
      }}
      className="flex-col sm:flex-row w-full   md:w-full;
        ">
      {/* Image */}
      <div style={{ padding: "1.8%" }} className="w-full sm:w-1/4">
        <img
          style={{ width: "100%", height: "auto", borderRadius: "4px" }}
          src={img_url ? img_url : LoadingImg}
          alt={name}
        />
      </div>

      <div className="w-full sm:w-3/4 flex sm:flex-wrap h-20  items-center justify-around">
        {/* Content */}
        <div style={{ width: "30%", paddingLeft: "2%" }}>{name}</div>
        {/* Plus-Minus Button */}
        <div
          style={{
            width: "20%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}>
          <button
            className="m-0"
            onClick={() => {
              quantity < maxQuantity && updateFeilds(id, quantity + 1);
            }}>
            <AddBoxIcon />
          </button>
          <div style={{ width: "50%", textAlign: "center" }}>
            <span>{quantity}</span>
          </div>
          <button
            className="m-0"
            style={{
              color: "black",
              width: "",
            }}
            onClick={() => {
              quantity > minQuantity && updateFeilds(id, quantity - 1);
            }}>
            <IndeterminateCheckBoxIcon />
          </button>
        </div>
        {/* Price */}
        <div style={{ width: "15%", textAlign: "center" }}>
          <h3>${price * quantity}</h3>
        </div>
        <div
          className=" px-3 py-3 hover:bg-black hover:text-white rounded-full"
          onClick={() => updateFeilds(id, 0)}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
