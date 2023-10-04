import { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Content/context/AuthorizationContext";
//icons
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircularProgress } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AgricultureIcon from "@mui/icons-material/Agriculture";
//components
import UserProfileDisplay from "./userProfileDetails/user_profile_display.js";
import Orders from "../Content/orders/recentOrders";
import Cart from "../Cart/my_cart";
import UserProducts from "./userproducts/userProducts";
import ServicesRequested from "./services_requested/servicesRequested";
import ProfileLoading from "../assets/lotti/profileLoading";
//api
import { getUser } from "../api/getUser";
import "./user_profile.css";

export default function User_profile() {
  const [data, setData] = useState({});
  const [activeComponent, setActiveComponent] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const useAuth = useContext(AuthContext);
  async function fetchData() {
    if (useAuth.currentUser) {
      try {
        setIsLoading(true);
        await getUser(useAuth?.currentUser?.email).then((result) => {
          setData({ ...result?.data });
          console.log(result);
          setIsLoading(false);
        });
      } catch (error) {
        setIsLoading(false);
        console.log(error.message);
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, [useAuth.currentUser]);

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <ProfileLoading />;
  }
  if (!useAuth.currentUser) {
    return <Navigate to={"/signin"} />;
  }

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      await useAuth.SignOut().then((result) => {
        setIsLoading(false);
        toast.success("Signed out successfully", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  function setActive(e) {
    setActiveComponent(e.target.id);
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.remove("active");
    });
    document.getElementById(e.target.id).classList.add("active");
  }

  return (
    <div className="proot" style={{minHeight:"100vh"}}>
      <div className="dashboard-container w-screen flex flex-col sm:flex-row">
        <div className="pro-root nav-container w-screen sm:h-full sm:w-1/5  flex-row sm:flex-col">
          <div className="user_details hidden sm:w-full min-h-fit sm:flex sm:flex-col ">
            <img className="user-image" src={data?.ip} alt="User photo"></img>
            <div className="user-name   font-bold">{data?.userName}</div>
            <div className="user-email font-medium">{data?.email}</div>
          </div>
          <div className=" flex sm:flex-col min-h-fit sm:px-4 sm:py-4 items-center sm:items-start">
            <div
              className="nav-item  sm:w-48  text-l active"
              id="1"
              onClick={(e) => setActive(e)}>
              <ManageAccountsIcon /> User Profile
            </div>
            <div
              className="nav-item  sm:w-48  text-l "
              id="2"
              onClick={(e) => setActive(e)}>
              <ShoppingCartIcon /> Cart
            </div>
            <div
              className="nav-item sm:w-48   text-l"
              id="3"
              onClick={(e) => setActive(e)}>
              <LocalMallIcon /> Orders
            </div>
            <div
              className="nav-item  sm:w-48  text-l"
              id="4"
              onClick={(e) => setActive(e)}>
              <Inventory2Icon /> Inventory
            </div>
            <div
              className="nav-item  sm:w-48  text-l"
              id="5"
              onClick={(e) => setActive(e)}>
              <AgricultureIcon /> Service Requests
            </div>
            <button
              disabled={isLoading}
              onClick={() => handleSignOut()}
              className="logout_button sm:w-full w-1/2 sm:mt-5 -mt-4">
              {!isLoading ? `Log out ` : <CircularProgress />}
              <LogoutIcon />
            </button>
          </div>
        </div>
        <div className="content-container flex w-full sm:w-4/5 ">
          {activeComponent == 1 && <UserProfileDisplay data={data} />}
          {activeComponent == 2 && <Cart />}
          {activeComponent == 3 && <Orders />}
          {activeComponent == 4 && <UserProducts />}
          {activeComponent == 5 && <ServicesRequested />}
        </div>
      </div>
    </div>
  );
}
