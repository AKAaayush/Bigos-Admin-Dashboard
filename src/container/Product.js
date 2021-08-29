import React from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
const Product = () => {
  return (
    <div>
      <Header />
      <SideNav />
      <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
        <p>Product</p>
      </div>
    </div>
  );
};

export default Product;
