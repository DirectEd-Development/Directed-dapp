import type { Vkeywitnesses } from '@mesh/core';
import type { Account, DataSignature, UTxO } from '@mesh/common/types';
export declare class EmbeddedWallet {
    private readonly _networkId;
    private readonly _encryptedSecret;
    constructor(_networkId: number, _encryptedSecret: string | [string, string]);
    getAccount(accountIndex: number, password: string): Account;
    signData(accountIndex: number, password: string, address: string, payload: string): DataSignature;
    signTx(accountIndex: number, password: string, utxos: UTxO[], unsignedTx: string, partialSign: boolean): Vkeywitnesses;
    static encryptMnemonic(words: string[], password: string): string;
    static encryptPrivateKey(bech32: string, password: string): string;
    static encryptSigningKeys(cborPaymentKey: string, cborStakeKey: string, password: string): [string, string];
    static generateMnemonic(strength?: number): string[];
    private accountContext;
    private static decrypt;
    private static encrypt;
    private static resolveAddress;
    private static resolveKeys;
    private static resolveSigners;
}
