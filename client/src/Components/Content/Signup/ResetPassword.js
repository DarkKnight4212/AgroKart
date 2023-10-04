import React, { useContext, useState } from "react";
import { CircularProgress } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthorizationContext.js";
import "./resetPassword.css";
import img from "./rpp.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ResetPassword() {
  const useAuth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResetPasswordSuccessful, setIsResetPasswordSuccessful] =
    useState(false);

  const handleResetPassword = async () => {
    try {
      setIsLoading(true);
      await useAuth.ForgotPassword(email).then((result) => {
        setIsLoading(false);
        toast.success("Password Reset Link Send in Mail",{
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
      setIsResetPasswordSuccessful(true);
    } catch (err) {
      setIsLoading(false);
      console.log(err.message);
    }
  };

  if (isResetPasswordSuccessful) {
    return (
      <div
        className="container flex flex-col justify-center content-center"
        style={{ width: "90vw", height: "42.8vh" }}>
        <h1 className="text-center text-3xl">
          {" "}
          Password Reset Link Send in Mail{" "}
        </h1>
        <Link
          to="/signin"
          className="w-1/2 flex self-center justify-center px-8 py-8">
          <button className="justify-center">Go to Sign In Page</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div
        className=" w-screen flex px-12 py-12 backimg"
        style={{ height: "90vh" }}>
        <div className="flex h-full w-full bg-white">
          <div className="w-2/5 h-full hidden sm:block">
            <img src={img} alt="img" className="h-full w-full" />
          </div>
          <div className="w-full sm:w-3/5 h-full flex flex-col justify-around">
            <div className="h-3/4 flex flex-col justify-around px-16 py-4">
              <div>
                <h2 className="text-3xl font-extrabold mb-4">
                  Reset your Password
                </h2>
                <p>
                  The verification email will be sent to the mail box
                  <br />
                  Please check it
                </p>
              </div>
              <div className="sm:w-1/2 w-full">
                <label className="text-xl">
                  Email :
                  <input
                    className="reset_pass_input"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <button
                  className="px-4 py-3 text-2xl rounded-3xl reset_pass_btn"
                  disabled={isLoading}
                  onClick={() => handleResetPassword()}>
                  {!isLoading ? "Reset Password" : <CircularProgress />}
                </button>
              </div>
            </div>
            <div>
              <Link to="/signin" className="px-16 hover:text-cyan-700">
                Back to login <LoginIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
