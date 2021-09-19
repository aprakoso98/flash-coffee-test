import { actionModal, actionRB, store } from ".";
const isInitialized = (errorMessage) => {
    const { ROOT } = store.getState();
    if (ROOT.loaded) {
        return true;
    }
    else {
        throw new Error(errorMessage);
    }
};
export const modalInstance = {
    show(children, options) {
        isInitialized('Show modal must inside Root component');
        store.dispatch(actionModal({ onBackdropPress: modalInstance.hide, ...options, children, isVisible: true }));
    },
    hide() {
        isInitialized('Show modal must inside Root component');
        store.dispatch(actionModal({ isVisible: false }));
    }
};
export const rawBottomInstance = {
    show(children, props) {
        isInitialized('Raw Sheet Bottom must inside Root component');
        const { RB_SHEET: { ref } } = store.getState();
        store.dispatch(actionRB({ children, props }));
        ref?.current?.open();
    },
    hide() {
        isInitialized('Raw Sheet Bottom must inside Root component');
        const { RB_SHEET: { ref } } = store.getState();
        ref?.current?.close();
    }
};
