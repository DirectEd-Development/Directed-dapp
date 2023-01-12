import { Quantity, Unit } from './Asset';
export declare type AssetExtended = {
    unit: Unit;
    policyId: string;
    assetName: string;
    fingerprint: string;
    quantity: Quantity;
};
