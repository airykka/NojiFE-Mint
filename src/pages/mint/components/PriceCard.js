import { ethers } from "ethers";
import React, { useContext } from "react";
import { WalletContext } from "../../../context/context";

export const PriceCard = () => {
  const {
    contractData: { minMintCost },
  } = useContext(WalletContext);
  return (
    <div className="mint-info-card">
      <p>Mint Price</p>
      <section>
        <h3
          title={
            ethers.utils.formatEther(parseInt(minMintCost?._hex ?? 0x00)) ?? 0
          }
        >
          {ethers.utils
            .formatEther(parseInt(minMintCost?._hex ?? 0x00))
            ?.substring(0, 4) ?? 0}
          ETH
        </h3>
        <h6>(+ gas)</h6>
      </section>
    </div>
  );
};
