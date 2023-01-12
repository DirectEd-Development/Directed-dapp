import type { UTxO } from '@mesh/common/types';
export declare class MinaWallet {
    static getAxiosInstance(): import("axios").AxiosInstance;
    static getAppId(): string;
    static openMinaFrontend(url: string): Promise<unknown>;
    static get(route: string, params?: {}): Promise<any>;
    static enable(): Promise<unknown>;
    static getChangeAddress(walletId?: undefined, accountIndex?: undefined): Promise<string | undefined>;
    static getUtxos(walletId?: undefined, accountIndex?: undefined): Promise<UTxO[]>;
    static signTx(unsignedTx: string, partialSign?: boolean): Promise<string | undefined>;
}
