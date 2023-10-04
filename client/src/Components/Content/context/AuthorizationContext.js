import { auth } from "../context/config/firebase.js";
import React, { useState, createContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { getUser } from "../../api/getUser.js";

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState("");
  const [currentUserDetails, setCurrentUserDetails] = useState({});

  function Signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function SignInWithGooglePopUp() {
    return signInWithPopup(auth, provider);
  }
  function SignOut() {
    return signOut(auth);
  }
  function ForgotPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      return unsubscribe;
    }, []);
  });
  useEffect(() => {
    const fetch = async () => {
      if (currentUser) {
        await getUser(currentUser.email).then((data) => {
          setCurrentUserDetails(data);
        });
      }
    };
    fetch();
  }, [currentUser]);

  const value = {
    currentUser,
    currentUserDetails,
    setCurrentUser,
    Signup,
    SignInWithGooglePopUp,
    login,
    SignOut,
    ForgotPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
