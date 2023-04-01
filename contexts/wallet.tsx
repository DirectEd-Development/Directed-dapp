import React, { createContext, useState, useContext, useMemo } from 'react';
import { BrowserWallet } from '@martifylabs/mesh';

const WalletContext = createContext({
  wallet: {} as BrowserWallet,
  connecting: false,
  walletNameConnected: '',
  walletConnected: false,
  connectWallet: async (walletName: string) => {},
  connectedAddress: '',
  currentNetwork: '',
});

export const WalletProvider = ({ children }:any) => {
  const [wallet, setWallet] = useState<BrowserWallet>({} as BrowserWallet);
  const [walletConnected, setWalletConnected] = useState<boolean>(false);
  const [connecting, setConnecting] = useState<boolean>(false);
  const [walletNameConnected, setWalletNameConnected] = useState<string>('');
  const [connectedAddress, setConnectedAddress] = useState<string>('');
  const [currentNetwork, setCurrentNetwork] = useState<string>(undefined || '')

  const connectWallet = async (walletName: string) => {
    setConnecting(true);
    const _wallet = await BrowserWallet.enable(walletName);
    
    const _address = await _wallet.getUsedAddresses();
    const _network = await _wallet.getNetworkId();
    if (_wallet) {
      setWallet(_wallet);
      setWalletNameConnected(walletName);
      setWalletConnected(true);
      setConnectedAddress(_address[0]);
      if(_network == 0) setCurrentNetwork("Testnet");
      if(_network == 1) setCurrentNetwork("Mainnet");
    }
    setConnecting(false);
  };

  const memoedValue = useMemo(
    () => ({
      wallet,
      connecting,
      walletNameConnected,
      walletConnected,
      connectWallet,
      connectedAddress,
      currentNetwork,
    }),
    [wallet, walletConnected, connecting, walletNameConnected, connectedAddress, currentNetwork]
  );

  return (
    <WalletContext.Provider value={memoedValue}>
      {children}
    </WalletContext.Provider>
  );
};

export default function useWallet() {
  return useContext(WalletContext);
}