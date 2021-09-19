import schedules from 'src/assets/data/schedules.json'
import rnfs from 'react-native-fs'
import { Loading } from 'src/components/ModalRoot'

const jsonFile = 'src/assets/data/schedules.json'
const jsonPath = `${rnfs.DocumentDirectoryPath}/flashCoffee.json`

export type Schedule = {
	id: string
	date: string;
	clockIn: string;
	clockOut: string;
	clockInTime: string;
	clockOutTime: string;
	location: string;
	eventName: string;
	hasSchedule: boolean;
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
		}, timeout ?? 1000)
	})
}

export const addSchedules = async (newSchedule: Schedule) => {
	const { id } = newSchedule
	const file = await getSchedules(0)
	file[id] = newSchedule
	await rnfs.writeFile(jsonPath, JSON.stringify(file), 'utf8')
	return file
}

export const editSchedules = async (newSchedule: Schedule & { id: string }) => {
	const { date } = newSchedule
	const file = await getSchedules(0)
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

export const clockIn = () => {

}

export const clockOut = () => {

}