import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Content/context/AuthorizationContext";
import Card from "../../Content/Home/BuyingSection/BuyingCard";

export default function UserProducts() {
  const useAuth = useContext(AuthContext);
  const [userProducts, setUserProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      if (useAuth.currentUserDetails) {
        try {
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: useAuth.currentUserDetails.id,
            }),
          };
          const data = await fetch(
            `https://${process.env.REACT_APP_IP}/user/get-user-products`,
            requestOptions
          )
            .then((res) => res.json())
            .then((data) => {
              setUserProducts(data.data);
            });
        } catch (err) {
          console.log(err.message);
        }
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="userProducts w-full justify-around flex">
      {userProducts?.map((product) => (
        <Card
          key={product._id}
          img_url={product.ip}
          maxQuantity={product.maxQuantity}
          minQuantity={product.minQuantity}
          name={product.name}
          description={product.description}
          price={product.price}
          id={product._id}
        />
      ))}
    </div>
  );
}
