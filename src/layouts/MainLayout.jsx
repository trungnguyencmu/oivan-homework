import React from "react";
import "./MainLayout.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout-component">
      <Header />
      <div className="main-content">{children}</div>
      <Footer />
    </div>
  );
};
export default MainLayout;
