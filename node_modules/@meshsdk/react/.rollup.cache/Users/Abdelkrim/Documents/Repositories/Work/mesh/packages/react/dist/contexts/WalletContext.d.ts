/// <reference types="react" />
import { BrowserWallet } from '@meshsdk/core';
interface WalletContext {
    hasConnectedWallet: boolean;
    connectedWalletInstance: BrowserWallet;
    connectedWalletName: string;
    connectingWallet: boolean;
    connectWallet?: (walletName: string) => Promise<void>;
    disconnect?: () => void;
    error?: unknown;
}
export declare const useWalletStore: () => {
    hasConnectedWallet: boolean;
    connectedWalletInstance: BrowserWallet;
    connectedWalletName: string;
    connectingWallet: boolean;
    connectWallet: (walletName: string) => Promise<void>;
    disconnect: () => void;
    error: unknown;
};
export declare const WalletContext: import("react").Context<WalletContext>;
export {};
