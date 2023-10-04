import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
// import styles from "./Team.module.css";
import Illustration from "./cartLoading.json";

const ContentIllustration = () => {
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Illustration,
    });
  }, []);

  return (
    <div
      style={{ width: "100vw", height: "100vh", alignItems: "center" }}
      ref={container}
    />
  );
};

export default ContentIllustration;
