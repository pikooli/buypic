import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import metamaskProviders from "@metamask/providers";

import cookie from "lib/cookies";
import metamaskService from "servies/metamaskService";

declare global {
  interface Window {
    ethereum: Obj;
  }
}

export default function ConnectEth() {
  const [provider, setProvider] = useState<
    metamaskProviders.MetaMaskInpageProvider | undefined
  >();
  const [account, setAccount] = useState<string | null>("");

  //
  const changeAccount = useCallback((accounts: unknown) => {
    setAccount(accounts as string);
  }, []);

  //
  const onClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const currentAccount = await metamaskService.connectAccount(provider);
    currentAccount && setAccount(currentAccount);
  };

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      const provider =
        window.ethereum as metamaskProviders.MetaMaskInpageProvider;
      setProvider(provider);
      const currentAccount = provider.selectedAddress;
      if (currentAccount) {
        setAccount(currentAccount);
        cookie.set("account", currentAccount);
      } else {
        cookie.set("account", "");
      }
      provider.on("accountsChanged", changeAccount);
    }
    return () => {
      provider?.off("accountsChanged", changeAccount);
    };
  }, []);

  if (!provider) {
    return (
      <div className="">
        Installe the Metamask extension to your browser
        <FontAwesomeIcon icon={["fab", "ethereum"]} />
      </div>
    );
  }

  if (!account) {
    return (
      <button className="btn btn-primary" onClick={onClick}>
        Connect
      </button>
    );
  }

  return <div className="my-auto">{account}</div>;
}
