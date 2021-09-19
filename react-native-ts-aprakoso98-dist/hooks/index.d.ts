export declare const useToggle: (initState?: boolean) => [boolean, (newValue?: boolean | undefined) => void];
export declare const useStateObject: <S extends {}>(initState?: S) => [S, (newValue: Partial<S>) => void];
export declare const useStateObjectV2: <S extends Record<string, unknown>>(initState: S) => [state: S, dispatch: (newState: Partial<S>) => void];
export declare const useStateArray: <S>(initState?: S[]) => [S[], (valueOrIndex: S | S[], index?: number | undefined) => void, (overrideValue: S[]) => void];
export declare const useInterval: (callback: () => void, delay: number | null) => void;
