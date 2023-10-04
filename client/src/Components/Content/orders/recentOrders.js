import React, { useContext, useEffect, useState } from "react";
import { getUser } from "../../api/getUser";
import "./recentOrders.css";
import { AuthContext } from "../context/AuthorizationContext";
import loading from "../../assets/loading.png";

function RecentOrdersPage() {
  const useAuth = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fet() {
      const resp = await fetch(
        `https://${process.env.REACT_APP_IP}/order/getOrders`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: useAuth.currentUser.email,
          }),
        }
      );
      const data1 = await resp.json();
      setData(data1.data);

      setIsLoading(true);
      const res = await fetch(
        `https://${process.env.REACT_APP_IP}/order/getImage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orders: data1.data,
          }),
        }
      );
      setIsLoading(false);
      const data3 = await res.json();
      setImage(data3.data);
    }
    fet();
  }, [useAuth.currentUser.email]);

  useEffect(() => {
    const fetch = async () => {
      try {
        await getUser(useAuth.currentUserDetails._id);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetch();
  }, []);

  // console.log(data);
  if (data?.length > 0) {
    return (
      <div className="orders-container temp-cont">
        <h1 className="recentHeading">Recent Orders</h1>
        <div className="orders ">
          {data.map((order, index) => (
            <div className="order-card" key={order.id}>
              <img
                src={isLoading ? loading : image[index]}
                alt="order"
                style={{ width: "50%" }}
              />
              <div style={{ borderRight: "1px solid #d2d2d2", width: "45%" }}>
                <strong>{order.name}</strong>
                <h4 className="order-time">Order Date : {order.orderDate}</h4>
              </div>
              <div>
                <h4>Quantity : {order.quantity}</h4>
                <h4> Price: {order.quantity * order.price}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="orders-container">
        <h1 className="text-3xl">No Orders Placed</h1>
      </div>
    );
  }
}

export default RecentOrdersPage;
