import schedules from 'src/assets/data/schedules.json'
import rnfs from 'react-native-fs'
import { Loading } from 'src/components/ModalRoot'
import store from 'src/redux';
import moment from 'moment';
import { actionSchedules } from 'src/redux/schedules';

const jsonFile = 'src/assets/data/schedules.json'
const jsonPath = `${rnfs.DocumentDirectoryPath}/flashCoffee.json`

export type Schedule = {
	date: string;
	clockIn: string;
	clockOut: string;
	clockInTime: string;
	clockOutTime: string;
	location: string;
	locationDetail: string;
}
export const getSchedules = (timeout?: number) => {
	return new Promise<Dict<Schedule>>(resolve => {
		setTimeout(async () => {
			try {
				const data = await rnfs.readFile(jsonPath)
				resolve(JSON.parse(data))
			} catch (e) {
				const data = require(jsonFile)
				await rnfs.writeFile(jsonPath, JSON.stringify(data), 'utf8')
				resolve(data)
			}
		}, timeout ?? 500)
	})
}

export const addSchedules = async (newSchedule: Schedule) => {
	const { date } = newSchedule
	const file = await getSchedules()
	file[date] = newSchedule
	await rnfs.writeFile(jsonPath, JSON.stringify(file), 'utf8')
	return file
}

export const editSchedules = async (newSchedule: Schedule) => {
	const { date } = newSchedule
	const file = await getSchedules()
	const index = file[date]
	if (index) file[date] = { ...index, ...newSchedule }
	await rnfs.writeFile(jsonPath, JSON.stringify(file), 'utf8')
	return file
}

export const deleteSchedules = async (newSchedule: Schedule) => {
	const { date } = newSchedule
	const file = await getSchedules(0)
	delete file[date]
	await rnfs.writeFile(jsonPath, JSON.stringify(file), 'utf8')
	return file
}

export const clockIn = async () => {
	const { SCHEDULES } = store.getState()
	const now = moment()
	const currentSchedule = SCHEDULES[now.format('YYYY-MM-DD')]
	const { clockInTime } = currentSchedule ?? {}
	if (currentSchedule) {
		if (clockInTime.length > 0) {
			Alert('You have already clock in today')
		} else {
			Loading.show()
			await editSchedules({ ...currentSchedule, clockInTime: now.format('HH:mm') })
			Loading.hide()
			// @ts-ignore
			store.dispatch(actionSchedules())
		}
	} else {
		Alert('You have no schedule today')
	}
}

export const clockOut = async () => {
	const { SCHEDULES } = store.getState()
	const now = moment()
	const currentSchedule = SCHEDULES[now.format('YYYY-MM-DD')]
	const { clockOutTime } = currentSchedule ?? {}
	if (currentSchedule) {
		if (clockOutTime.length > 0) {
			Alert('You have already clock out today')
		} else {
			Loading.show()
			await editSchedules({ ...currentSchedule, clockOutTime: now.format('HH:mm') })
			Loading.hide()
			// @ts-ignore
			store.dispatch(actionSchedules())
		}
	} else {
		Alert('You have no schedule today')
	}
}