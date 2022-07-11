import React, { useContext } from "react";
import { WalletContext } from "../../../context/context";

export const SupplyCard = () => {
  const {
    contractData: { maxTotalSupply, totalSupply },
  } = useContext(WalletContext);

  return (
    <div className="mint-info-card">
      <p>available Supply</p>
      <h3>
        {parseInt(totalSupply?._hex ?? 0x00)}/
        {parseInt(maxTotalSupply?._hex ?? 0x00)}
      </h3>
    </div>
  );
};
