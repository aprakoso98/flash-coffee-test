import { useEffect, useRef, useState } from 'react';
export const useToggle = (initState = false) => {
    const [toggle, setToggle] = useState(initState);
    return [
        toggle,
        set => setToggle(set !== undefined ? typeof set === 'boolean' ? set : !toggle : !toggle)
    ];
};
export const useStateObject = (initState = {}) => {
    const [state, setState] = useState(initState);
    return [
        state,
        newValue => setState({ ...state, ...newValue })
    ];
};
export const useStateObjectV2 = (initState) => {
    const keys = Object.keys(initState);
    let states = keys.reduce((ret, k) => {
        ret[k] = useState(initState[k]);
        return ret;
    }, {});
    const values = keys.reduce((ret, k) => {
        ret[k] = states[k][0];
        return ret;
    }, {});
    const dispatch = keys.reduce((ret, k) => {
        ret[k] = states[k][1];
        return ret;
    }, {});
    const setters = (newState) => {
        const keys = Object.keys(newState);
        keys.forEach(k => {
            const value = newState[k];
            const dispathcer = dispatch[k];
            if (![value, dispathcer].includes(undefined))
                dispatch[k](value);
            // @ts-ignore
            // else states[k] = useState(value)
        });
    };
    return [values, setters];
};
export const useStateArray = (initState = []) => {
    const [state, setState] = useState(initState || []);
    return [
        state,
        (valueOrIndex, indexOrPush) => {
            let newState = state.slice();
            if (Array.isArray(valueOrIndex)) {
                newState = [...newState, ...valueOrIndex];
            }
            else {
                if (typeof indexOrPush === 'number') {
                    newState[indexOrPush] = valueOrIndex;
                }
                else {
                    newState.push(valueOrIndex);
                }
            }
            setState(newState);
        },
        override => setState(override)
    ];
};
export const useInterval = (callback, delay) => {
    const savedCallback = useRef();
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    useEffect(() => {
        if (delay !== null) {
            let id = setInterval(() => {
                savedCallback?.current?.();
            }, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};
