import { csl } from '@mesh/core';
import type { TransactionWitnessSet, Vkeywitnesses } from '@mesh/core';
export declare const mergeSignatures: (txWitnessSet: TransactionWitnessSet, newSignatures: Vkeywitnesses) => csl.Vkeywitnesses;
