import type { NativeScript } from '@mesh/common/types';
export declare class ForgeScript {
    static withOneSignature(address: string): string;
    static withAtLeastNSignatures(addresses: string[], minimumRequired: number): string;
    static withAnySignature(addresses: string[]): string;
    static withAllSignatures(addresses: string[]): string;
    static fromNativeScript(script: NativeScript): string;
}
