import React from "react";
import Recom from "./home/recomendation/Recom";
import Category from "./home/category/Category";
import Future from "./home/future/Future";

const SecLayout = () => {
  return (
    <div>
      <Recom />
      <Category />
      <Future />
    </div>
  );
};

export default SecLayout;
