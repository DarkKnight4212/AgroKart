import React, { useState, useContext, useEffect } from "react";
import FileBase from "react-file-base64";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../api/createUser";
import { CircularProgress } from "@mui/material";
import { AuthContext } from "../context/AuthorizationContext.js";
import SelectOption from "./SelectOption";

import "./Signup.css";

function Signup() {
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({});
  const useAuth = useContext(AuthContext);

  const handleEntryChanges = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };

  const handleProfileChanges = (e) => {
    var profiledata = [];
    e.map((e) => {
      profiledata.push(e.value);
    });
    setForm({ ...form, profiledata });
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

  const handelSignUp = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      form.password === confirmPassword
        ? await useAuth.Signup(form.email, form.password).then((result) => {
            createUser(form);
            setIsLoading(false);
            toast.success("User created successfully", {
              position: "bottom-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          })
        : toast.error("Password and confirm password does not match", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
    } catch (err) {
      console.log(err.message);
      toast.error(err.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (useAuth.currentUser) {
      return (window.location.href = "/userProfile");
    }
  }, [useAuth.currentUser]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="sign-container">
        <div className="left-side">
          <div className="left-child">
            <SelectOption
              handleProfileChanges={handleProfileChanges}
              style={{ marginTop: "7rem" }}
            />
            {form.ip ? (
              <img src={form.ip} className="pro-img-main" />
            ) : (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwSTvN7cBwsaA0izTzKk37pmjMrCU6pcm9Q&usqp=CAU"
                className="pro-img-main"
              />
            )}
            {/* <img src={form.ip} className="pro-img-main"/> */}
            <label>
              Upload Profile Pic:
              <FileBase
                id="file"
                type="image"
                multiple={false}
                onDone={({ base64 }) => setForm({ ...form, ip: base64 })}
                style={{ display: "none" }}
              />{" "}
            </label>
            <button
              className="submit-btn arya"
              disabled={isLoading}
              onClick={() => handleSignInWithGooglePopUp()}
              style={{
                backgroundColor: "#23231e",
                color: "white",
                display: "none",
              }}>
              Sign in with Google
            </button>
          </div>
        </div>
        <div className="right-side">
          <div className="right-head">Create Account</div>
          <div className="input-root">
            <div className="mobile-usertype">
              <SelectOption
                handleProfileChanges={handleProfileChanges}
                style={{ marginTop: "7rem", width: "85%" }}
              />
            </div>
            <div className="input-con">
              <label>Name</label>
              <input
                type="text"
                name="userName"
                required
                value={form.userName}
                onChange={(e) => handleEntryChanges(e)}
              />
            </div>
            <div className="input-con">
              <label>Email address</label>
              <input
                type="text"
                name="email"
                required
                value={form.email}
                onChange={(e) => handleEntryChanges(e)}
              />
            </div>
            <div className="input-con">
              <label>Password</label>
              <input
                type="password"
                name="password"
                required
                value={form.password}
                onChange={(e) => handleEntryChanges(e)}
              />
            </div>
            <div className="input-con">
              <label>Confirm Password</label>
              <input
                type="password"
                name="cofirmPassword"
                required
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
              />
            </div>
            <div className="input-con">
              <label>Mobile No.</label>
              <input
                type="text"
                name="Mnumber"
                required
                value={form.Mnumber}
                minLength="12"
                onChange={(e) => handleEntryChanges(e)}
              />
            </div>
            <div className="input-con">
              <label>Account No.</label>
              <input
                type="text"
                name="accountNo"
                required
                value={form.accountNo}
                minLength={12}
                maxLength={12}
                onChange={(e) => handleEntryChanges(e)}
              />
            </div>
            <div className="input-con">
              <label>Address</label>
              <input
                type="text"
                name="address"
                required
                value={form.address}
                minLength="12"
                onChange={(e) => handleEntryChanges(e)}
              />
            </div>
            <div className="mobile-profile">
              <label>
                Upload Profile Pic:
                <FileBase
                  id="file"
                  type="image"
                  multiple={false}
                  onDone={({ base64 }) => setForm({ ...form, ip: base64 })}
                  style={{ display: "none" }}
                />{" "}
              </label>
            </div>
            <div className="radio-btn" style={{ height: "5%" }}>
              <div id="gender">Gender</div>
              <div className="radio-btn">
                <div className="rdbtn-temp">
                  {" "}
                  Male{" "}
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onFocus={(e) => {
                      setForm({ ...form, gender: e.target.value });
                    }}
                  />
                </div>
                <div className="rdbtn-temp">
                  {" "}
                  Female{" "}
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onFocus={(e) => {
                      setForm({ ...form, gender: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>
            <button className="submit-btn" onClick={handelSignUp}>
              Sign In
            </button>
            <Link to="/signin">
              <div class=" Great">Already have an Account? Sign In</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
