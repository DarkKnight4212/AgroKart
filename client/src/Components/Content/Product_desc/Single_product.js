import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import { CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { AuthContext } from "../context/AuthorizationContext";
import "./single_product.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = React.useState({});
  const [temp, setTemp] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const useAuth = React.useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fet() {
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
      const resp = await fetch(
        `https://${process.env.REACT_APP_IP}/product/get-product/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data1 = await resp.json();
      setData(data1.product);
      setTemp(data1.product.minQuantity);
    }
    fet();
  }, [id]);

  const addToCart = async () => {
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
          name: `${data.category} ${data.product} ${data.species}`,
          price: data.price,
          email: useAuth.currentUser.email,
          minQuantity: data.minQuantity,
          maxQuantity: data.maxQuantity,
          quantity: temp,
        }),
      }
    );
    const data2 = await resp.json();
    setIsLoading(false);

    if (data2.message === "success") {
      toast.success("Product Added to cart Succesfully", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/cart");
    } else if (data2.message === "already added") {
      toast.warn("Product already present in cart", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/cart");
    }
  };

  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
        <div
          class="w-screen container px-5 py-24 mx-auto"
          style={{ width: "100vw" }}>
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={data.ip}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest uppercase">
                {data.category}
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {data.species} {data.product}
              </h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span class="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p class="leading-relaxed">{data.description}</p>
              <p className="py-2">Max Quantity {data.maxQuantity} kg</p>
              <p className="text-green-600">₹ {data.price} /kg</p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div class="flex ml-6 items-center">
                  <span class="mr-3">Quantity</span>

                  <div
                    onClick={(e) => {
                      temp > data.minQuantity && setTemp(temp - 1);
                    }}>
                    <RemoveIcon />
                  </div>
                  <div>{temp}</div>
                  <div
                    onClick={(e) =>
                      temp < data.maxQuantity && setTemp(temp + 1)
                    }>
                    <AddIcon />
                  </div>
                  <div class="relative"></div>
                </div>
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  ₹ {data.price * temp}
                </span>
                <button
                  disabled={isLoading}
                  class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  onClick={addToCart}>
                  {!isLoading ? "Add To Cart" : <CircularProgress />}
                </button>
                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProduct;
