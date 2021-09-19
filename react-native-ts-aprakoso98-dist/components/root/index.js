import { storeCreator } from '../../';
import { combineReducers, createStore } from 'redux';
import { createSelectorHook } from 'react-redux';
export const { reducer, action } = storeCreator({
    key: 'LIB_ROOT',
    initialState: { loaded: false },
    onRequest: (state, { payload }) => ({ ...state, ...payload })
});
export const { reducer: reducerModal, action: actionModal } = storeCreator({
    key: 'LIB_MODAL',
    initialState: {},
    onRequest: (state, { payload }) => ({ ...state, ...payload })
});
export const { reducer: reducerRB, action: actionRB } = storeCreator({
    key: 'LIB_RB_SHEET',
    initialState: {},
    onRequest: (state, { payload }) => ({ ...state, ...payload })
});
const reducers = combineReducers({
    ROOT: reducer,
    MODAL: reducerModal,
    RB_SHEET: reducerRB
});
export const store = createStore(reducers);
export const useSelector = createSelectorHook();
export { Root } from './root';
export { modalInstance, rawBottomInstance } from './methods';
