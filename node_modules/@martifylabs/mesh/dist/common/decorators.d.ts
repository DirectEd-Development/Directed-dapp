/// <reference types="chai" />
/// <reference types="chai-subset" />
export declare const Trackable: <T extends new (...args: any[]) => Object>(constructor: T) => {
    new (...args: any[]): {
        __visits: never[];
        constructor: Function;
        toString(): string;
        toLocaleString(): string;
        valueOf(): Object;
        hasOwnProperty(v: PropertyKey): boolean;
        isPrototypeOf(v: Object): boolean;
        propertyIsEnumerable(v: PropertyKey): boolean;
        should: Chai.Assertion;
    };
} & T;
export declare const Checkpoint: () => (_target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => void;
export interface TrackableObject {
    __visits: unknown[];
}
