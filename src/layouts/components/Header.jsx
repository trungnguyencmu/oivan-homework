import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <div class="header">
      <a href="#default" class="logo">
        Oivan Viet Nam
      </a>
    </div>
  );
};
export default React.memo(Header);
