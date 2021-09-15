import React, { useEffect } from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, sizes, textSizes } from 'src/utils/constants';
import { View } from 'src/components'
import { ButtonSquare } from './Button';
import { TouchableOpacity } from './';
import { Animated, Easing } from 'react-native';

type IconProps = {
	name: string
	color?: keyof typeof colors
	size?: keyof typeof textSizes
	boxSize?: keyof typeof sizes
	onlyIcon?: boolean
	solid?: boolean
	spin?: boolean
} & Omit<GetProps<typeof ButtonSquare>, 'size' | 'color'>
const Icon = (props: IconProps) => {
	const { spin, onlyIcon, boxSize, color, size, name, onPress, solid, ...rest } = props
	const spinValue = new Animated.Value(0);
	const spinner = () => {
		spinValue.setValue(0);
		Animated.timing(
			spinValue, {
			toValue: 1,
			duration: 1000,
			easing: Easing.linear,
			useNativeDriver: true
		}).start(spinner)
	}
	let icon = <FontAwesome5Icon
		solid={solid}
		name={name}
		size={textSizes[size ?? 't_default']}
		color={colors[color ?? 'dark']}
	/>
	const rotate = spinValue.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });
	icon = spin ? <Animated.View style={{ transform: [{ rotate }] }}>{icon}</Animated.View> : icon
	if (onlyIcon) return <TouchableOpacity onPress={onPress} {...rest}>{icon}</TouchableOpacity>
	useEffect(() => {
		if (spin) spinner()
	}, [])
	return onPress ?
		<ButtonSquare
			color='transparent'
			size={boxSize}
			onPress={onPress} {...rest}>{icon}</ButtonSquare>
		: icon
}

export const IconText = (props: IconProps) => {
	const { style, ...rest } = props
	return <Icon
		boxSize="container"
		style={{ marginVertical: -sizes.container, marginHorizontal: -sizes.container / 4 }}
		{...rest}
	/>
}

export const IconRight = (props: IconProps) => {
	const { onPress, boxSize = 'container', ...rest } = props
	const size = sizes[boxSize] ?? 0
	return <TouchableOpacity
		disabled={onPress === undefined}
		style={{ padding: size / 2, marginRight: -size / 2 }}
		onPress={onPress}>
		<Icon {...rest} />
	</TouchableOpacity>
}

export const AlertIcon = (props) => {
	const { ...rest } = props
	const outerSize = sizes.pinSpacing
	const innerSize = sizes.header
	const propsCircle: GetProps<typeof View> = {
		itemsCenter: true,
		justifyCenter: true,
		style: {
			borderRadius: sizes._radiusRound
		},
		...rest
	}
	return <View
		{...propsCircle}
		width={outerSize}
		height={outerSize}
		backgroundColor="placeholder">
		<View
			{...propsCircle}
			width={innerSize}
			height={innerSize}
			backgroundColor="primary">
			<Icon color="light" size="t_big" name="check" />
		</View>
	</View>
}

export default Icon