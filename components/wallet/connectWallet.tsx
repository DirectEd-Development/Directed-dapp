import { useEffect, useState } from 'react';
import useWallet from '../../contexts/wallet';
import { BrowserWallet } from '@martifylabs/mesh';
import type { Wallet } from '@martifylabs/mesh';
import Button from "../Button";


export default function ConnectWallet() {
    const { connecting, walletNameConnected, connectWallet } = useWallet();
    const [availableWallets, setAvailableWallets] = useState<Wallet[]>([]);

    useEffect(() => {
        async function init() {
            setAvailableWallets(BrowserWallet.getInstalledWallets());
        }
        init();
    }, []);

    return (
        <>
            {availableWallets
                ? availableWallets.length == 0
                    ? 'No wallets found'
                    : availableWallets.map((wallet, i) => (
                        <button key={i} onClick={() => connectWallet(wallet.name)} className="bg-light text-primary hover:bg-light font-semibold hover:border-none btn capitalize">
                            Connect with {wallet.name}
                        </button>
                    ))
                : ''}
        </>
    );
}