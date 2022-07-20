/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { NavLink } from "react-router-dom";
import "../style/styleComponent/section.scss";

const Section = () => {
  return (
    <div className="section">
      <div className="primarySection">
        <div className="right">
          <h3>
            Faites payer vos clients en quelques clics avec des interfaces de
            paiement intuitif.
          </h3>
          <hr></hr>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            reiciendis laudantium, dicta dignissimos officia soluta fugiat
            eveniet ad. Temporibus eaque velit delectus odio labor.
          </p>
          <button>
            <NavLink to="">Commencer</NavLink>
          </button>
        </div>

        <div className="left">
          <img
            style={{ width: "600px" }}
            src="../../../assets/phone mockups.png"
            alt=""
          />
        </div>
      </div>

      <div className="secondarySection">
        <div className="right">
          <h3>Un tableau de bord épuré et sécurisé.</h3>
          <hr></hr>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            reiciendis laudantium, dicta dignissimos officia soluta fugiat
            eveniet ad. Temporibus eaque velit delectus odio laborum numquam
            voluptate cum aut ipsam dolorem!.
          </p>
        </div>
        <div className="left">
          <img
            style={{ width: "500px" }}
            src="../../../assets/rightSection.png"
            alt=""
          />
        </div>
      </div>
      <div className="api">
        <h3>Une Api simple pour les développeurs.</h3>
        <hr></hr>
      </div>

      <div className="formatTable">
        <div className="elementTableAqua">
          <h2>Des API performantes facile à intégrer</h2>
          <p>
            Nous concevons des solutions optimisées pour éviter à vos équipes de
            jongler entre différents systhème ou de passer des mois à intégrer
            des fonctionnalitées de paiement.
          </p>
          <NavLink to="">Lire la documentation</NavLink>
          <h2>Intégrations préconfigurées</h2>
          <hr></hr>
          <p>
            Utilisez des intégrations conçues pour des systhèmes tels que
            shopify,WooCommerce,NetSuite et bien d'autres.
          </p>

          <div className="imageIntegration">
            <div className="imageIntegrationElement">
              <img src="../../../assets/wordpresslogo.png" alt="" />
            </div>
            <div className="imageIntegrationElement">
              <img src="../../../assets/shopify.png" alt="" />
            </div>
            <div className="imageIntegrationElement">
              <img src="../../../assets/magento.png" alt="" />
            </div>
            <div className="imageIntegrationElement">
              <img src="../../../assets/prestashop.png" alt="" />
            </div>
          </div>
        </div>
        <div className="elementTableBlack">
          <iframe src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C1%29&t=seti&wt=none&l=text%2Fx-php&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=true&fl=1&fm=Hack&fs=14.5px&lh=176%25&si=false&es=4x&wm=false&code=%252F%252F%2520Renseigner%2520la%2520cl%25C3%25A9%2520api%2520de%2520votre%2520compte%250A%255CFedapay%255CFedapay%253A%253AsetApiKey%28MY_API_KEY%29%253B%250A%252F%252F%2520Cr%25C3%25A9er%2520la%2520transaction%250A%2524transaction%2520%253D%2520%255CFedapay%255CTransaction%253A%253Acreate%28%255B%250A%2520%2520%2520%2520%2522description%2522%2520%253D%253E%2520%2522Article%25202309ART%2522%252C%250A%2520%2520%2520%2520%2522amount%2522%2520%253D%253E%252010000%252C%250A%2520%2520%2520%2520%2522currency%2522%2520%253D%253E%2520%255B%2522code%2522%2520%253D%253E%2520%2522XOF%2522%255D%252C%250A%2520%2520%2520%2520%2522callback_url%2522%2520%253D%253E%2520%2522http%253A%252F%252Fe-shop.com%252Fpayment%252Fcallback.php%2522%252C%250A%2520%2520%2520%2520%2522customer%2522%2520%253D%253E%2520%255B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2522firstname%2522%2520%253D%253E%2520%2522John%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2522lastname%2522%2520%253D%253E%2520%2522Doe%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2522email%2522%2520%253D%253E%2520%2522john.doe%2540gmail.com%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2522phone%2522%2520%253D%253E%2520%2522%252B22966000000%2522%250A%2520%2520%2520%2520%255D%250A%255D%29%253B%250A%252F*%250A%2520*%2520G%25C3%25A9n%25C3%25A9rer%2520un%2520lien%2520s%25C3%25A9curis%25C3%25A9%2520de%2520paiement%250A%2520*%2520%257B%250A%2520*%2520%2520%2520%2522token%2522%253A%2520%2522SECURED_TOKEN%2522%252C%250A%2520*%2520%2520%2520%2522url%2522%253A%2520%2522https%253A%252F%252Fprocess.fedapay.com%252FSECURED_TOKEN%2522%250A%2520*%2520%257D%250A%2520*%252F%250A%2524token%2520%253D%2520%2524transaction-%253EgenerateToken%28%29%253B"></iframe>
        </div>
      </div>

      <div className="api">
        <h3>Pourquoi Frikpay ?</h3>
        <hr></hr>
        <p>
          Nous vous donnons les outils pour vendre partout ou sont vos clients.
        </p>
      </div>
      <div className="cardContainer">
        <div className="containerElement">
          <img src="../../../assets/frikpos.png" alt="" />
          <h4>Frikpos</h4>
          <p>
            Générez des liens de paiement et partager-les à vos clients via Facebook,WhatsApp,Mesaangerddzazdazdazdazdaz cccccdddddd
          </p>
          <div className="arrow">
            <NavLink to="">
              En savoir plus <i class="fa-solid fa-arrow-right"></i>
            </NavLink>
          </div>
        </div>
        <div className="containerElement">
          <img src="../../../assets/pngwing.png" alt="" />
          <h4>Fripos direct</h4>
          <p>
            Générez des liens de paiemntbet partager-les à vos clientsbvia
            Facebook,WhatsApp,M
          </p>
          <div className="arrow">
            <NavLink to="">
              En savoir plus <i class="fa-solid fa-arrow-right"></i>
            </NavLink>
          </div>
        </div>
        <div className="containerElement">
          <img src="../../../assets/api.png" alt="" />
          <h4>Intégration API</h4>
          <p>
            Nous mettons à votre disposition une API REST préte à l'emploie pour
            les sites web et application mobiles.
          </p>
          <div className="arrow">
            <NavLink to="">
              En savoir plus <i class="fa-solid fa-arrow-right"></i>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="aqua">
        <h3>Commencer des maintenant à utiliser Frikpay</h3>
        <button>
          <a href="https://app.frikpay.digital/register">
          Créer mon compte
          </a>
        </button>
      </div>
    </div>
  );
};

export default Section;
