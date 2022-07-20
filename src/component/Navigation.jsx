import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/styleComponent/naviagtion.scss";

function Navigation() {
  const [show, setShow] = useState(false);
  const [position, setposition] = useState(false);

  const handleclick = () => {
    setShow(!show);
  };
  const handleSrcoll = () => {
    if (window.scrollY > 15) {
      setposition(true);
    } else {
      setposition(false);
    }
  };

  window.addEventListener("scroll", handleSrcoll);
  return (
    <div className="navigation">
      <div className="linearBackground"></div>
      <nav
        className={position ? "container stick" : "container"}
        onScroll={handleSrcoll}
      >
        <div className="logo">
          <img width="190px" src="../../../assets/logo.png" alt="" />
        </div>
        <div className={show ? "links active" : "links"}>
          <NavLink exact to="">
            Accueil
          </NavLink>
          <NavLink exact to="">
            Comment ça marche ?
          </NavLink>
          <NavLink exact to="">
            Tarifs
          </NavLink>
          <NavLink exact to="">
            Develloper
          </NavLink>
        </div>
        <div className="login">
          <button id="inscription">
            <a className="btn" href="https://app.frikpay.digital/register">
              Inscription
            </a>
          </button>
          <div className="country">
            <img src="../../../assets/francepng.png" width="40px" alt="" />
            <i></i>
          </div>
          <button id="secondary">
            <a className="btn" href="https://app.frikpay.digital/login">
              Connexion
            </a>
          </button>
        </div>
        <div onClick={handleclick} className="burger">
          <i className={show ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
