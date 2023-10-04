import React, { useContext, useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { AuthContext } from "../context/AuthorizationContext.js";
import { Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignIn.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const useAuth = useContext(AuthContext);

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      await useAuth.login(email, password).then((result) => {
        toast.success("Login Successfull", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleSignInWithGooglePopUp = async () => {
    try {
      setIsLoading(true);
      await useAuth.SignInWithGooglePopUp().then((result) => {
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (useAuth.currentUser) {
    return <Navigate to={"/userProfile"} />;
  }

  return (
    <>
      <div className="sign-cont">
        <div className="left-side"></div>
        <div className="right-side">
          <div className="right-head">Create Account</div>
          <div className="input-root">
            <div className="input-cont">
              <label>Email address</label>
              <input
                type="text"
                required
                value={email}
                style={{ color: "black" }}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
              />
            </div>
            <div className="input-cont">
              <label>Password</label>
              <input
                type="password"
                required
                style={{ color: "black" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-cont btn-temp">
              <div style={{ display: "flex", alignItems: "center" }}>
                <input type="checkbox" />
                Remember me
              </div>
              <div>
                <Link to="/signin/resetpassword">Forgot Password ?</Link>
              </div>
            </div>
            <button
              className="submit-btn"
              disabled={isLoading}
              onClick={() => handleSignIn()}>
              {!isLoading ? "Login" : <CircularProgress />}
            </button>
            <button
              className="submit-btn hidden"
              disabled={isLoading}
              onClick={() => handleSignInWithGooglePopUp()}>
              Sign in with Google
            </button>
            <Link to="/signup">
              <div className="hover:text-[#0000b3] hover:font-bold">
                Don't have an Account? Sign Up
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
