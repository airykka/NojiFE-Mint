import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { AppRouter } from "./AppRouter";
import { HomeContext, WalletContext } from "./context/context";

function App() {
  const [gameMode, setGameMode] = useState(false);
  const [play, setPlay] = useState("play");
  const [account, setAccount] = useState("");
  const [contractData, setContractData] = useState({});
  const [currentScreen, setCurrentScreen] = useState(0);
  return (
    <div>
      <ToastContainer
        position="top-right"
        theme="dark"
        hideProgressBar={true}
        autoClose={5000}
      />
      <WalletContext.Provider
        value={{ account, setAccount, contractData, setContractData }}
      >
        <HomeContext.Provider
          value={{
            gameMode,
            setGameMode,
            play,
            setPlay,
            currentScreen,
            setCurrentScreen,
          }}
        >
          <AppRouter />
        </HomeContext.Provider>
      </WalletContext.Provider>
    </div>
  );
}

export default App;
