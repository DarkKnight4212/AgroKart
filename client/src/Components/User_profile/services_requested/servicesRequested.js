import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Content/context/AuthorizationContext";
import ServiceLoading from "../../assets/lotti/ServiceLoading";
import Card from "./card";

export default function ServicesRequested() {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const useAuth = useContext(AuthContext);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: useAuth.currentUser.email,
          }),
        };
        setisLoading(true);
        const res = await fetch(
          `https://${process.env.REACT_APP_IP}/user/get-user-rent`,
          requestOptions
        );
        const data = await res.json();
        setdata(data.data);
        setisLoading(false);
      } catch (err) {
        setisLoading(false);
        console.log(err.message);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="w-full flex  flex-col place-items-center">
      {!isLoading ? (
        data.map((item) => <Card data={item} />)
      ) : (
        <ServiceLoading />
      )}
    </div>
  );
}
