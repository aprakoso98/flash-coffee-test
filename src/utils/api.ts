import schedules from 'src/assets/data/schedules.json'

export type Schedule = typeof schedules[number]
export const getSchedules = () => {
	return new Promise<Schedule[]>(resolve => {
		setTimeout(() => {
			resolve(schedules)
		}, 1000)
	})
}