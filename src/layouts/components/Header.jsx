import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <a href="#default" className="logo">
        Oivan Viet Nam
      </a>
    </div>
  );
};
export default React.memo(Header);
