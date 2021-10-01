import React from "react";
import "./MainLayout.scss";
import Footer from "./components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout-component">
      <div className="main-content">{children}</div>
      <Footer />
    </div>
  );
};
export default MainLayout;
