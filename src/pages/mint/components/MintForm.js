import React, { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import {
  Button,
  ConnectWallet,
  InputField,
  Loader,
} from "../../../components/index";
// import { WalletContext } from "../../../context/context";
// import { contractAddress } from "../../../utils/utils";

export const MintForm = () => {
  const [count, setCount] = useState(1);
  let limit = 2;

  const [error] = useState("allowlist");
  const [loading] = useState(false);

  //this determines what show in the box
  const [status] = useState("");
  // const { account, contractData } = useContext(WalletContext);

  const increaseCount = () => {
    if (count < limit) {
      setCount(count + 1);
    }
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  //error object
  const errors = {
    allowlist: "Oops! This address is not eligible for our presale.",
    maxMint: "Oops! You have minted the maximum allowed for this wallet.",
  };

  return (
    <div className="mint-form-wrap">
      {status === "connected" && (
        <section>
          <article className="counter-element">
            <button onClick={decreaseCount}>-</button>
            <InputField disabled type="number" value={count} />
            <button onClick={increaseCount}>+</button>
          </article>
          <article className="mint-btn-wrap">
            {loading ? (
              <div className="loader-wrap">
                <Loader />
              </div>
            ) : (
              <Button label="mint" />
            )}
          </article>
        </section>
      )}
      {status === "error" && (
        <section>
          <ErrorMessage message={errors[error]} />
        </section>
      )}
      {status === "success" && (
        <section className="success-message">
          <h5>Congratulations!🎉 </h5>
          <p>Your mint was successful!</p>
          <small>(You can now view your nft on Opensea or Looksrare)</small>
        </section>
      )}
      {status === "" && (
        <section>
          <ConnectWallet className="in-page-connect" />
        </section>
      )}
    </div>
  );
};
