import React from "react";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import SecLayout from "./pages/sections/SecLayout";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <SecLayout />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
