export declare const useWalletSubmit: () => {
    error: unknown;
    result: string | undefined;
    submitting: boolean;
    submitTx: (signedTx: string) => Promise<void>;
};
