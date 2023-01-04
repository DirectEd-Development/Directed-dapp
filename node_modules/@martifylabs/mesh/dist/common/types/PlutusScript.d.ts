import { LANGUAGE_VERSIONS } from '../constants';
export declare type PlutusScript = {
    version: LanguageVersion;
    code: string;
};
export declare type LanguageVersion = keyof typeof LANGUAGE_VERSIONS;
