import "./Logo.css";
import logo from "../../assets/img/code.svg";
import React from "react";

const Logo = (props) => {
  return (
    <aside className="logo">
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>
    </aside>
  );
};

export default Logo;
