import React from 'react';
import { NavLink } from 'react-router-dom';
import "../style/styleComponent/heroes.scss";

function Heroes() {
  return (
    <div className="heroes">
      <div className="container">
        <div className="left">
          <h2>
            Encaissez simplement et en toute sécurité les paiements en ligne
            partout ou sont vos clients.
          </h2>
          <div className="buttondiv">
            <button>
              <NavLink exact to="">
                Essayez maintenant
              </NavLink>
            </button>
            <button className="secondaryButton">
              <NavLink exact to="">
                Obtenez une démo
              </NavLink>
            </button>
          </div>
        </div>
        
        <div className="right"></div>
      </div>
      <h3>Les moyens de paiement que nous utilisons</h3>
      <hr></hr>

      <div className="cardMoney">
        <img src="../../../assets/mtnPay.png" alt="" />
        <img src="../../../assets/moovPay.png" alt="" />
        <img src="../../../assets/visacard.png" alt="" />
      </div>
    </div>
  );
}

export default Heroes

