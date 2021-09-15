import React from 'react';
import { createView, createButton } from 'react-native-ts-aprakoso98'
import { colors, fonts, sizes, textSizes } from 'src/utils/constants';

export const { SafeAreaView, Divider, Wrapper, View } = createView({
	colors
})

export const { View: Card } = createView({ colors })

export const { View: Container } = createView({
	colors, props: {
		backgroundColor: 'light',
		flex: 1
	}
})

export const TouchableOpacity = createButton({
	colors, fonts, sizes: { ...sizes, ...textSizes },
	props: (props) => {
		if (props?.color?.[2]) return {
			style: {
				borderRadius: sizes._radius,
				borderWidth: sizes._outlineWidth
			}
		}
		return {}
	}
})

type TheBoxSpaceProps = GetProps<typeof View>
	& { color?: keyof typeof colors, size?: keyof typeof sizes }
const TheBoxSpace = ({ style, color, size = 'padding', ...rest }: TheBoxSpaceProps) => {
	return <View
		backgroundColor={__DEV__ ? color : undefined}
		style={{ borderRadius: rest.backgroundColor ? sizes._radius : 0, ...style }}
		width={sizes[size]}
		height={sizes[size]}
		{...rest}
	/>
}
export const BoxSpace = {
	A: (props: TheBoxSpaceProps) =>
		<TheBoxSpace color="danger" {...props} />,
	B: (props: TheBoxSpaceProps) =>
		<TheBoxSpace color="primary" size="content" {...props} />,
	C: (props: TheBoxSpaceProps) =>
		<TheBoxSpace color="success" size="contentLarge" {...props} />,
	D: (props: TheBoxSpaceProps) =>
		<TheBoxSpace color="alertLight" size="container" {...props} />,
	E: (props: TheBoxSpaceProps) =>
		<TheBoxSpace color="warning" size="box" {...props} />,
	F: (props: TheBoxSpaceProps) =>
		<TheBoxSpace color="lightBlue" size="header" {...props} />,
	G: (props: TheBoxSpaceProps) =>
		<TheBoxSpace color="dangerLight" size="pinSpacing" {...props} />,
}