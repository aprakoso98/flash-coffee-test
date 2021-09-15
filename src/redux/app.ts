import { storeCreator } from 'react-native-ts-aprakoso98';
import { SheetProps } from 'src/components/BottomSheet';
import { PropsModal } from 'src/components/ModalRoot';

export const { action: actionRoute, reducer: reducerRoute, initialState: initStateRoute } = storeCreator({
	key: 'ROUTE',
	initialState: {
		splashScreenDone: false,
		introEnabled: true,
		loggedIn: false
	},
	onRequest: (state, { payload }) => {
		return { ...state, ...payload }
	}
})

export const { action: actionSheet, reducer: reducerSheet } = storeCreator({
	initialState: {
		visible: false,
		props: {} as SheetProps
	},
	key: 'SHEET_MANAGER',
	onRequest: (state, { payload }) => {
		return { ...state, ...payload }
	}
})

export const { action: actionModal, reducer: reducerModal } = storeCreator({
	initialState: {
		visible: false,
		props: {} as PropsModal
	},
	key: 'MODAL_MANAGER',
	onRequest: (state, { payload }) => {
		return { ...state, ...payload }
	}
})

const AppRedux = {
	ROUTE: reducerRoute,
	SHEET: reducerSheet,
	MODAL: reducerModal,
}

export default AppRedux