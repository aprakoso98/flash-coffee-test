declare type ActionType<T, P> = {
    type: T;
    payload: P;
};
declare type StateManagement<K, S, A> = {
    key: K;
    initialState: S;
    onRequest: (state: S, actions: A) => S;
    onFulfill?: (state: S, actions: A) => S;
    onReject?: (state: S, actions: A) => S;
};
declare const storeCreator: <S, K extends string>(stateManagement: Pick<StateManagement<K, S, ActionType<K, S>>, "key" | "initialState" | "onRequest">) => {
    initialState: S;
    action: (payload: Partial<S>) => {
        type: K;
        payload: S;
    };
    reducer: (state: S | undefined, actions: ActionType<K, S>) => S;
};
declare const storeCreatorPromise: <S extends Record<string, unknown>, K extends string, H extends (...args: any) => Promise<any>>(stateManagement: StateManagement<K, S, ActionType<K, ThenArg<ReturnType<H>>>> & {
    promises: H;
}) => {
    initialState: S;
    action(...payload: Parameters<H> | [{
        direct: Partial<S>;
    }]): {
        type: K;
        payload: Partial<S>;
    } | {
        type: K;
        payload: ReturnType<H>;
    };
    reducer: (state: S | undefined, actions: ActionType<K, ReturnType<H>>) => S;
};
export { storeCreator, storeCreatorPromise };
