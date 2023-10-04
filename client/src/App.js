import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Components/Content/context/AuthorizationContext.js";

import Cart from "./Components/Cart/my_cart.js";
import Home from "./Components/Content/Home/Home.js";
import Navbar from "./Components/Navbar/Navbar.js";
import "./App.css";
import About from "./Components/Content/About/AboutUs.js";
import Signup from "./Components/Content/Signup/Signup.js";
import SignIn from "./Components/Content/Signup/SignIn.js";
import ResetPassword from "./Components/Content/Signup/ResetPassword";
import Shop from "./Components/Content/Shop/Shop.js";
import Footer from "./Components/Footer/footer";
import Renting from "./Components/Content/Rent/ServicesRequiredListing";
import Veg_Sell from "./Components/Content/Sell_form/veg_sell_form/veg_sell_form";
import UserProfile from "./Components/User_profile/User_profile";
import Orders from "./Components/Content/orders/recentOrders";
import Rent_sell from "./Components/Content/Sell_form/rent_sell_form";
import SingleProduct from "./Components/Content/Product_desc/Single_product.js";
import MlPage from "./Components/Ml_models/ml_page.js";
import FertilizerForm from "./Components/Ml_models/fertilizerModelForm";
import PredictionForm from "./Components/Ml_models/predictionModelForm.js";
import CropPredictionResult from "./Components/Ml_models/cropModelResult.js";
import Menu from "./Components/menu/menu";
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    <AuthProvider>
      <div className="App">
      <ToastContainer />
        <Menu />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route
            exact
            path="/signin/resetpassword"
            element={<ResetPassword />}
          />
          <Route exact path="/rent" element={<Renting />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/userProfile" element={<UserProfile />} />
          <Route exact path="/sell" element={<Veg_Sell />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/get-rent-service" element={<Rent_sell />} />
          <Route exact path="/recent-orders" element={<Orders />} />
          <Route exact path="/product/:id" element={<SingleProduct />} />
          <Route exact path="/farming-advisor" element={<MlPage />} />
          <Route
            exact
            path="/model-form/fertilizer"
            element={<FertilizerForm />}
          />
          <Route
            exact
            path="/model-form/prediction-crop"
            element={<PredictionForm />}
          />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
