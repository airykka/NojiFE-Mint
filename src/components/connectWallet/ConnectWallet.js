import React, { useState, useContext } from "react";
import { WalletContext } from "../../context/context";
import { Button } from "..";
import "./connectWallet.scss";
// import { contractAddress } from "../../utils/utils";

export const ConnectWallet = ({ className = "" }) => {
  const [open, setOpen] = useState(false);
  const { account } = useContext(WalletContext);

  return (
    <div>
      <Button
        label={account?.length > 0 ? `Hi, wallet address...` : "CONNECT WALLET"}
        className={`connect-btn ${className}`}
      />

      {open && (
        <section className="quit-modal-space">
          <div
            className="disconnect-bg-child"
            onClick={() => setOpen(false)}
          ></div>
          <div className="main-disconnect-contain modal-card">
            <h4>Do you want to disconnect your wallet?</h4>
            <div>
              <Button
                label="Disconnect"
                onClick={() => {
                  setOpen();
                }}
              />
              <Button label="Cancel" onClick={() => setOpen(false)} />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
