import React, { ReactElement } from 'react';
import { ActivityIndicator as AI, FlatList as FL, FlatListProps, ListRenderItemInfo, ViewStyle } from 'react-native';
import { createView, createButton } from 'react-native-ts-aprakoso98'
import { colors, fonts, sizes, textSizes } from 'src/utils/constants';

export const { SafeAreaView, Wrapper, View } = createView({ colors })

export const { Divider } = createView({ colors, defaultBackgroundColor: 'placeholder' })

export const { View: Card } = createView({
	colors,
	props: {
		backgroundColor: 'greySoft',
		style: {
			borderRadius: sizes._radius,
			padding: sizes.content,
		}
	}
})

export const { View: Container } = createView({
	colors, props: {
		backgroundColor: 'light',
		flex: 1,
		style: {
			paddingBottom: sizes.container,
		}
	}
})

export const { View: WrapperItem } = createView({
	colors, props: {
		style: {
			paddingHorizontal: sizes.contentLarge,
		}
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

type AIProps = {
	color?: keyof typeof colors
	size?: keyof typeof sizes
}
export const ActivityIndicator = (props: AIProps) => {
	const { color = 'darkGrey', size = 'contentLarge' } = props
	return <AI color={colors[color]} size={sizes[size]} />
}

export type FLProps<T> = Omit<FlatListProps<T>, 'renderItem'> & {
	renderItem: (props: { i: number, isLast: boolean } & ListRenderItemInfo<T>) => ReactElement | null
}
export const FlatList = <T,>(props: FLProps<T>) => {
	const { keyExtractor, data = [], renderItem: RItem, style, ...rest } = props
	return <FL
		data={data}
		renderItem={({ index, item, separators }) => {
			const isLast = index === (data?.length ?? 0) - 1
			const props = { index, item, i: index, separators, isLast }
			return <RItem {...props} />
		}}
		style={{ paddingHorizontal: sizes.container, ...style as ViewStyle }}
		keyExtractor={(_, i) => i.toString()}
		{...rest}
	/>
}

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
		<TheBoxSpace color="dark" size="container" {...props} />,
	E: (props: TheBoxSpaceProps) =>
		<TheBoxSpace color="warning" size="box" {...props} />,
	F: (props: TheBoxSpaceProps) =>
		<TheBoxSpace color="blue" size="header" {...props} />,
	G: (props: TheBoxSpaceProps) =>
		<TheBoxSpace color="alertLight" size="pinSpacing" {...props} />,
}