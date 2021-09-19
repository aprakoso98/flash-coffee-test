import React, { useLayoutEffect } from 'react';
import { Provider } from 'react-redux';
import { action, store } from '.';
import Modal from './modal';
import RawBottom from './raw-bottom';
export const Root = ({ children }) => {
    useLayoutEffect(() => {
        store.dispatch(action({ loaded: true }));
    }, []);
    return <Provider store={store}>
		{children}
		<Modal />
		<RawBottom />
	</Provider>;
};
