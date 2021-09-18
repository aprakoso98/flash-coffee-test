import moment, { Moment } from 'moment'
import { getBundleId, getVersion, getBuildNumber } from 'react-native-device-info'
import properties from 'src/../../envs/gradle-properties.json'

export const colors = {
	primary: '#FFDD02',
	success: '#5CC4BA',
	danger: '#FA285A',
	dark: '#000000',
	light: '#FFFFFF',
	warning: '#FA2E5F',
	transparent: 'rgba(0,0,0,0)',
	alertLight: '#FCF1C3',
	blue: '#3C6EE3',
	darkGrey: '#8D9EBA',
	greySoft: '#F4F4F4',
	greyHard: '#D1D1D1',
	placeholder: '#D5DDEA',
}

export const sizes = {
	_outlineWidth: 1,
	_radius: 6,
	_radiusRound: 50,
	_miniPadding: 3,
	padding: 8,
	content: 16,
	contentLarge: 24,
	container: 32,
	box: 48,
	header: 64,
	pinSpacing: 80
}

export const textSizes = {
	x_small: 8,
	t_small: 10,
	t_placeholder: 14,
	t_default: 16,
	t_title: 20,
	t_big: 22,
	get x_big() { return this.t_big * 2 }
}

export const fonts = {
	Default: 'Inter-Regular',
	SemiBold: 'Inter-SemiBold',
	Bold: 'Inter-Bold'
}

export type BtnColor = Tuple<TypeProp<typeof colors>, 1 | 2 | 3>
export type BtnKey = 'primary' | 'secondary' | 'logout' | 'transparent' | 'tPrimary' | 'tSecondary'
export type ButtonColorsType = Record<BtnKey, BtnColor>
export const buttonColors: ButtonColorsType = {
	primary: ['primary', 'light', 'transparent'],
	secondary: ['transparent', 'primary', 'primary'],
	logout: ['light', 'danger', 'danger'],
	transparent: ['transparent', 'dark', 'transparent'],
	tPrimary: ['transparent', 'primary', 'transparent'],
	tSecondary: ['transparent', 'dark', 'transparent'],
}

type NtfColor = Tuple<TypeProp<typeof colors>, 1 | 2 | 3>
type NotificationColorsType = Record<NtfKey, NtfColor>
export type NtfKey = 'card' | 'danger' | 'success' | 'info'
export const notificationColors: NotificationColorsType = {
	card: ['light', 'dark', 'transparent'],
	danger: ['danger', 'danger', 'danger'],
	success: ['success', 'success', 'success'],
	info: ['primary', 'primary', 'primary'],
}

export const IS_DEV_APP = getBundleId() === 'com.awan'

export const MONTH_NAME = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
export const monthMoment = <T extends Moment | string>(format?: string) => {
	return MONTH_NAME.reduce((ret, _, i) => {
		const date = moment().add(i, 'M').startOf('M')
		const data = (typeof format === 'string' ? date.format(format) : date) as T
		if (i >= moment().get('M')) ret.push(data)
		return ret
	}, [] as T[])
}

export const VERSION = {
	NAME: getVersion(),
	BUILD: getBuildNumber(),
}

// @ts-ignore
export const APP_VERSION = `${VERSION.NAME}.${properties?.PUSH_VERSION ?? 0} (${VERSION.BUILD})`