import React from "react";
import CardContainer from "./CardContainer";
import Footer from "./Footer";
import Main from "./Main";
import Navbar from "./Navbar";

const HomeWrapper = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default HomeWrapper;
