import React from "react";
import nia from "../../images/Nia.png";
import ring from "../../images/ring.svg";
import { SupplyCard, PriceCard, MintForm } from "./components/index";
import "./mint.scss";

export const Mint = () => {
  return (
    <div className="mint-page">
      <section className="wrap-mint-main">
        <div>
          <SupplyCard />
        </div>
        <div>
          <PriceCard />
        </div>
        <div>
          <MintForm />
        </div>
      </section>

      <section className="portrait">
        <img src={nia} alt="woman" className="woman" />
      </section>
      <section className="rotating-ring">
        <img src={ring} alt="ring" />
      </section>
    </div>
  );
};
