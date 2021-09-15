import moment, { Moment } from 'moment'
import { getBundleId, getVersion, getBuildNumber } from 'react-native-device-info'
import properties from 'src/../../envs/gradle-properties.json'

export const colors = {
	transparent: 'rgba(0,0,0,0)',
	dTransparent: 'rgba(0,0,0,.5)',
	gradientStart: '#3C6EE3',
	gradientEnd: '#009DFF',
	warning: '#FF8F3C',
	alertLight: '#FCF1C3',
	alert: '#CEA00D',
	dangerLight: '#FFE6E6',
	danger: '#E60F0F',
	successLight: '#EAFCEF',
	success: '#54A85B',
	primaryLight: '#DFE3FD',
	primary: '#3C6EE3',
	lightBlue: '#38D2FF',
	darkGrey: '#8D9EBA',
	dark: '#5D5D5D',
	darker: '#000000',
	light: '#FFFFFF',
	placeholder: '#D5DDEA',
	get placeholderSoft() {
		return `${this.placeholder}80`
	}
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
	t_big: 22
}

export const fonts = {
	Default: 'Inter-Regular',
	SemiBold: 'Inter-SemiBold',
	Bold: 'Inter-Bold'
}

export type BtnColor = Tuple<TypeProp<typeof colors>, 1 | 2 | 3>
export type BtnKey = 'primary' | 'secondary' | 'unused' | 'logout' | 'transparent' | 'tPrimary' | 'tSecondary' | 'bSecondary'
export type ButtonColorsType = Record<BtnKey, BtnColor>
export const buttonColors: ButtonColorsType = {
	primary: ['primary', 'light', 'transparent'],
	secondary: ['transparent', 'primary', 'primary'],
	unused: ['placeholder', 'light', 'transparent'],
	logout: ['light', 'danger', 'danger'],
	transparent: ['transparent', 'dark', 'transparent'],
	tPrimary: ['transparent', 'primary', 'transparent'],
	tSecondary: ['transparent', 'dark', 'transparent'],
	bSecondary: ['transparent', 'darkGrey', 'darkGrey'],
}

type NtfColor = Tuple<TypeProp<typeof colors>, 1 | 2 | 3>
type NotificationColorsType = Record<NtfKey, NtfColor>
export type NtfKey = 'card' | 'danger' | 'success' | 'info' | 'alert'
export const notificationColors: NotificationColorsType = {
	card: ['light', 'dark', 'darkGrey'],
	danger: ['dangerLight', 'danger', 'danger'],
	success: ['successLight', 'success', 'success'],
	info: ['primaryLight', 'primary', 'primary'],
	alert: ['alertLight', 'alert', 'alert'],
}

export const VERSION = {
	NAME: getVersion(),
	BUILD: getBuildNumber(),
}

// @ts-ignore
export const APP_VERSION = `${VERSION.NAME}.${properties?.PUSH_VERSION ?? 0} (${VERSION.BUILD})`