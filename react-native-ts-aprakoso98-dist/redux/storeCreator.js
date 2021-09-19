const storeCreator = (stateManagement) => {
    const { key, initialState, onRequest } = stateManagement;
    return {
        initialState,
        action: (payload) => {
            return { type: key, payload: payload };
        },
        reducer: (state = initialState, actions) => {
            switch (actions.type) {
                case key: return onRequest(state, actions);
                default: return state;
            }
        }
    };
};
const storeCreatorPromise = (stateManagement) => {
    const { key, promises, initialState, onRequest, onFulfill, onReject } = stateManagement;
    return {
        initialState,
        action(...payload) {
            // @ts-ignore
            const [param] = payload;
            if (param?.direct)
                return { type: key, payload: param?.direct };
            return { type: key, payload: promises(...payload) };
        },
        reducer: (state = initialState, actions) => {
            const _actions = actions;
            switch (actions.type) {
                case key: return onRequest(state, _actions);
                case `${key}_FULFILLED`:
                    if (onFulfill)
                        return onFulfill(state, _actions);
                    return state;
                case `${key}_REJECTED`:
                    if (onReject)
                        return onReject(state, _actions);
                    return state;
                default: return state;
            }
        }
    };
};
export { storeCreator, storeCreatorPromise };
