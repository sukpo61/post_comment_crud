import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="Headerbox">
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <img className="HeaderLogo" src="images/HomePageimg/Logo.jpg" alt="" />
      </div>
      <div className="Hambuger">
        <i class="fa-solid fa-bars"></i>
      </div>
    </header>
  );
};

export default Header;
