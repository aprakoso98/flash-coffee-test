import { storeCreatorPromise } from "react-native-ts-aprakoso98"
import { getSchedules, Schedule } from "src/utils/api"

const initialState: ReturnTypePromise<typeof getSchedules> = {}
export const { action: actionSchedules, reducer: reducerSchedules } = storeCreatorPromise({
	initialState,
	key: 'SCHEDULES',
	promises: getSchedules,
	onRequest: state => state,
	onReject: () => initialState,
	onFulfill: (state, { payload: data }) => {
		return { ...state, ...data }
	}
})