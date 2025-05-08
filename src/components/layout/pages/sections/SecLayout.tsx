import React from "react";
import Recom from "./home/recomendation/Recom";
import Category from "./home/category/Category";
import Future from "./home/future/Future";
import New from "./home/new/New";
import Sale from "./home/sales/Sale";
import SmartPhone from "./home/smartphones/SmartPhone";
import Laptop from "./home/laptops/Laptop";
import Choose from "./home/choose/Choose";
import Reception from "./home/reception/Reception";

const SecLayout = () => {
  return (
    <div>
      <Recom />
      <Category />
      <Future />
      <New />
      <Sale />
      <SmartPhone />
      <Laptop />
      <Choose />
      <Reception />
    </div>
  );
};

export default SecLayout;
