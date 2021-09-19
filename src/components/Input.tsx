import React, { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { useToggle } from 'react-native-ts-aprakoso98';
import { colors, fonts, sizes, textSizes } from 'src/utils/constants';
import { BoxSpace, Divider, View, Wrapper } from './';
import Text, { TextPlaceholder, TextSemi } from './Text';
import Icon from './Icon';
import { useEffect } from 'react';


export type InputProps = Omit<TextInputProps, 'style'> &
	Partial<Record<
		'renderLeftAccessory'
		| 'renderOutsideLeftAccessory'
		| 'renderOutsideRightAccessory'
		| 'renderRightAccessory'
		| 'renderTopAccessory'
		| 'renderOutsideBottomAccessory'
		| 'renderBottomAccessory',
		() => JSX.Element>>
	& {
		editableLight?: boolean
		style?: GetProps<typeof View>['style']
		label?: string
		haveRightPadding?: boolean
		inputStyle?: TextInputProps['style']
	}

const Input = (props: InputProps) => {
	const {
		inputStyle,
		editableLight,
		editable = true,
		label, haveRightPadding,
		renderBottomAccessory: RBccs,
		renderOutsideBottomAccessory: RBOccs,
		renderTopAccessory: RTccs,
		renderOutsideRightAccessory: RAOccs, renderOutsideLeftAccessory: LAOccs,
		renderRightAccessory: RAccs, renderLeftAccessory: LAccs,
		style, ...rest
	} = props
	const Cores = {
		label: label && <>
			<Text size="t_placeholder">{label}</Text>
			<BoxSpace.A />
		</>,
		input: <TextInput
			editable={editable}
			blurOnSubmit={false}
			underlineColorAndroid="transparent"
			placeholderTextColor={colors.placeholder}
			style={[{
				flex: 1,
				borderWidth: 0,
				fontSize: textSizes.t_default,
				fontFamily: fonts.SemiBold,
				padding: 0,
				color: colors.dark,
			}, inputStyle]}
			{...rest}
		/>
	}
	const Accessories = {
		lAccs: LAccs && <>
			<View style={{ paddingVertical: sizes.padding }}>
				<LAccs />
			</View>
			<BoxSpace.A />
		</>,
		lAOccs: LAOccs && <>
			<LAOccs />
			<BoxSpace.B />
		</>,
		rAccs: RAccs && <>
			<BoxSpace.A />
			<View style={{ paddingVertical: sizes.padding }}>
				<RAccs />
			</View>
		</>,
		rAOccs: RAOccs && <>
			<BoxSpace.B />
			<RAOccs />
		</>,
		rBAccs: RBccs && <>
			<Divider color="alertLight" width="100%" />
			<BoxSpace.A />
			<View style={{ paddingHorizontal: sizes.padding }} width="100%">
				<RBccs />
			</View>
			<BoxSpace.A />
		</>,
		rTAccs: RTccs && <>
			<BoxSpace.A />
			<View style={{ paddingHorizontal: sizes.padding }} width="100%">
				<RTccs />
			</View>
			<BoxSpace.A />
			<Divider color="alertLight" width="100%" />
		</>,
		rBOccs: RBOccs && <>
			<BoxSpace.A />
			<View width="100%">
				<RBOccs />
			</View>
		</>
	}
	return <>
		{Cores.label}
		<Wrapper>
			{Accessories.lAOccs}
			<View
				flex itemsCenter
				backgroundColor={editable || editableLight ? 'light' : 'grey'}
				style={{
					minHeight: sizes.box,
					borderWidth: sizes._outlineWidth,
					borderRadius: sizes._radius,
					borderColor: colors.darkGrey,
					...style
				}}>
				{Accessories.rTAccs}
				<Wrapper style={{
					paddingLeft: sizes.padding,
					paddingRight: haveRightPadding ? sizes.padding : RAccs ? 0 : sizes.padding,
				}} height={sizes.box} flex itemsCenter>
					{Accessories.lAccs}
					{Cores.input}
					{Accessories.rAccs}
				</Wrapper>
				{Accessories.rBAccs}
			</View>
			{Accessories.rAOccs}
		</Wrapper>
		{Accessories.rBOccs}
	</>
}

export const InputSearch = (props: InputProps) => {
	const { value = '', onChangeText = noopV, renderRightAccessory, ...rest } = props
	const canReset = value.length > 0
	const reset = () => onChangeText('')
	return <Input
		value={value}
		placeholder="Cari data"
		onChangeText={onChangeText}
		renderRightAccessory={() => <Icon onPress={reset} name={canReset ? 'times' : 'search'} />}
		{...rest}
	/>
}

export const InputSecure = (props: InputProps) => {
	const [eye, setEye] = useToggle(true)
	const { label, placeholder = label, secureTextEntry, renderRightAccessory, ...rest } = props
	return <Input
		label={label}
		placeholder={placeholder}
		secureTextEntry={eye}
		renderRightAccessory={() =>
			<Icon onPress={() => setEye()} name={eye ? 'eye' : 'eye-slash'} />
		}
		{...rest}
	/>
}

export const InputPhone = (props: InputProps) => {
	const { secureTextEntry, ...rest } = props
	return <Input
		keyboardType="number-pad"
		renderLeftAccessory={() => <Text color="darkGrey" font="SemiBold">+62</Text>}
		{...rest}
	/>
}

type InputCurrencyProps = Omit<InputProps, 'value' | 'onChangeText'> & {
	value?: number
	onChangeText?: (value: number) => void
}
export const InputCurrency = (props: InputCurrencyProps) => {
	const { value = 0, onChangeText = noop, ...rest } = props
	const [newValue, setValue] = useState('')
	useEffect(() => {
		setValue(value.toString().format())
	}, [value])
	return <Input
		value={newValue}
		keyboardType="number-pad"
		onChangeText={value => onChangeText(value.extractNumber())}
		renderLeftAccessory={() => <TextSemi color="darkGrey">Rp.</TextSemi>}
		{...rest}
	/>
}

export const InputNumber = (props: InputCurrencyProps) => {
	return <InputCurrency
		// @ts-ignore
		renderLeftAccessory={null}
		{...props}
	/>
}

export default Input