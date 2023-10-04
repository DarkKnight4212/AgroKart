import React, { useEffect } from "react";
import ProductSection from "./ShopPages/ProductSection/ProductSection";

function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: "rgb(249, 245, 233) " }}>
      <ProductSection />
    </div>
  );
}

export default Shop;
