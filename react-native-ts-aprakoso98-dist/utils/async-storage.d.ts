declare type V = object | string | boolean;
export declare const AsyncStorage: {
    getItem<R extends V>(key: string): Promise<R | null>;
    getItems<K extends string>(keys: K[]): Promise<Record<K, unknown>>;
    setItems(items: MyObject<V>): Promise<Record<string, void>>;
    setItem(key: string, value: V): Promise<void>;
    removeItem(key: string, callback?: ((error?: Error | undefined) => void) | undefined): Promise<void>;
    mergeItem(key: string, value: string, callback?: ((error?: Error | undefined) => void) | undefined): Promise<void>;
    clear(callback?: ((error?: Error | undefined) => void) | undefined): Promise<void>;
    getAllKeys(callback?: ((error?: Error | undefined, keys?: string[] | undefined) => void) | undefined): Promise<string[]>;
    multiGet(keys: string[], callback?: ((errors?: Error[] | undefined, result?: [string, string | null][] | undefined) => void) | undefined): Promise<[string, string | null][]>;
    multiSet(keyValuePairs: string[][], callback?: ((errors?: Error[] | undefined) => void) | undefined): Promise<void>;
    multiRemove(keys: string[], callback?: ((errors?: Error[] | undefined) => void) | undefined): Promise<void>;
    multiMerge(keyValuePairs: string[][], callback?: ((errors?: Error[] | undefined) => void) | undefined): Promise<void>;
};
export {};
