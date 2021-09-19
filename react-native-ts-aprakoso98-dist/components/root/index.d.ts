import { ModalProps } from 'react-native-modal';
import { RBProps } from './raw-bottom';
export declare const reducer: (state: {
    loaded: boolean;
} | undefined, actions: {
    type: "LIB_ROOT";
    payload: {
        loaded: boolean;
    };
}) => {
    loaded: boolean;
}, action: (payload: Partial<{
    loaded: boolean;
}>) => {
    type: "LIB_ROOT";
    payload: {
        loaded: boolean;
    };
};
export declare const reducerModal: (state: ModalProps | undefined, actions: {
    type: "LIB_MODAL";
    payload: ModalProps;
}) => ModalProps, actionModal: (payload: Partial<ModalProps>) => {
    type: "LIB_MODAL";
    payload: ModalProps;
};
export declare const reducerRB: (state: RBProps | undefined, actions: {
    type: "LIB_RB_SHEET";
    payload: RBProps;
}) => RBProps, actionRB: (payload: Partial<RBProps>) => {
    type: "LIB_RB_SHEET";
    payload: RBProps;
};
export declare const store: import("redux").Store<import("redux").CombinedState<{
    ROOT: {
        loaded: boolean;
    };
    MODAL: ModalProps;
    RB_SHEET: RBProps;
}>, {
    type: "LIB_ROOT";
    payload: {
        loaded: boolean;
    };
} | {
    type: "LIB_MODAL";
    payload: ModalProps;
} | {
    type: "LIB_RB_SHEET";
    payload: RBProps;
}>;
export declare const useSelector: <Selected extends unknown>(selector: (state: import("redux").CombinedState<{
    ROOT: {
        loaded: boolean;
    };
    MODAL: ModalProps;
    RB_SHEET: RBProps;
}>) => Selected, equalityFn?: ((previous: Selected, next: Selected) => boolean) | undefined) => Selected;
export { Root } from './root';
export { modalInstance, rawBottomInstance, ModalOpt } from './methods';
