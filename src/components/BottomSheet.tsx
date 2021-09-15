import React from 'react';
import { RBSheet, SheetManager, Wrapper } from 'react-native-ts-aprakoso98';
import { View, BoxSpace } from './';
import { useState } from 'react';
import { colors, sizes } from 'src/utils/constants';
import { LayoutRectangle, ViewStyle } from 'react-native';
import Text, { TextTitle } from './Text';
import Button from './Button';
import { AlertIcon } from './Icon';
import { useEffect } from 'react';
import store, { useSelector } from 'src/redux';
import { useDispatch } from 'react-redux';
import { actionSheet } from 'src/redux/app';

export type SheetProps = Omit<
	GetProps<typeof RBSheet>,
	'closeOnDragDown' | 'closeOnPressBack' | 'closeOnPressMask' | 'content'
> & {
	freeDraw?: boolean
	closeDisabled?: boolean
	viewProps?: Omit<GetProps<typeof View>, 'style'>
	style?: GetProps<typeof View>['style']
}
const BottomSheet = (props: SheetProps) => {
	const { viewProps, freeDraw, customStyles, closeDisabled, style, children, ...rest } = props
	const { container, draggableIcon, wrapper } = customStyles ?? {}
	const [layout, setLayout] = useState<LayoutRectangle>()
	return <RBSheet
		closeOnDragDown={!closeDisabled}
		closeOnPressBack={!closeDisabled}
		closeOnPressMask={!closeDisabled}
		height={
			(layout?.height ?? 0)
			+ (!closeDisabled ? sizes.content + sizes._radius / 1.5 : 0)
		}
		customStyles={!freeDraw ? {
			container: {
				height: sizes.pinSpacing * 2,
				backgroundColor: colors.light,
				borderTopLeftRadius: sizes._radius,
				borderTopRightRadius: sizes._radius,
				...container as ViewStyle
			},
			draggableIcon: {
				marginTop: sizes.content,
				marginBottom: 0,
				backgroundColor: colors.placeholder,
				width: sizes.container,
				height: sizes._radius / 1.5,
				...draggableIcon as ViewStyle
			},
			wrapper
		} : customStyles}
		{...rest}>
		{freeDraw ? children : <View
			style={{ paddingHorizontal: sizes.container, ...style }}
			onLayout={({ nativeEvent: { layout } }) => setLayout(layout)} {...viewProps}>
			{children}
			<BoxSpace.C />
		</View>}
	</RBSheet>
}

export const SheetRoot = (props) => {
	const dispatch = useDispatch()
	const { children } = props
	const { SHEET } = useSelector(state => state)
	const { visible = false, props: _sheetProps } = SHEET ?? {}
	const { manager: _, onClose = noop, ...sheetProps } = _sheetProps ?? {}
	const [manager, setManager] = useState<SheetManager>()
	useEffect(() => {
		if (visible) manager?.open?.()
		else manager?.close?.()
	}, [visible])
	return <>
		<BottomSheet
			manager={setManager}
			onClose={close => {
				dispatch(actionSheet({ visible: false }))
				onClose(close)
			}}
			{...sheetProps}
		/>
		{children}
	</>
}

type ConfirmationProps = {
	title: string
	subTitle: string
	leftBtnText?: string
	rightBtnText?: string
	leftBtnPress?: (close: () => void) => void
	rightBtnPress?: (close: () => void) => void
}
export const ConfirmationSheet = {
	hide() {
		store.dispatch(actionSheet({ visible: false }))
	},
	show: function (props: ConfirmationProps) {
		const _this = this
		const { title, subTitle,
			leftBtnText = 'Tidak', rightBtnText = 'Ya',
			leftBtnPress = _this.hide, rightBtnPress = _this.hide,
		} = props
		store.dispatch(
			actionSheet({
				visible: true,
				props: {
					closeDisabled: true,
					children: <>
						<BoxSpace.B />
						<TextTitle alignCenter>{title}</TextTitle>
						<BoxSpace.B />
						<Text alignCenter>{subTitle}</Text>
						<BoxSpace.C />
						<Wrapper>
							<Button onPress={() => leftBtnPress(_this.hide)} flex color="unused">{leftBtnText}</Button>
							<BoxSpace.B />
							<Button onPress={() => rightBtnPress(_this.hide)} flex>{rightBtnText}</Button>
						</Wrapper>
					</>
				}
			})
		)
	}
}

type AlertSheetProps = {
	btnPress?: (close: () => void) => void
	btnText?: string
	type?: 'success' | 'error' | 'warning' | 'info' | 'question'
	subTitle: string
}
export const AlertSheet = {
	hide() {
		store.dispatch(actionSheet({ visible: false }))
	},
	show: function (props: string | AlertSheetProps) {
		const _this = this
		const _props: AlertSheetProps = typeof props === 'string' ? { subTitle: props } : props
		const { btnText = 'Ok', subTitle, btnPress = _this.hide } = _props
		store.dispatch(
			actionSheet({
				visible: true,
				props: {
					closeDisabled: true,
					children: <>
						<BoxSpace.C />
						<AlertIcon selfCenter />
						<BoxSpace.C />
						<Text alignCenter>{subTitle}</Text>
						<BoxSpace.D />
						<Button onPress={() => btnPress(() => _this.hide())}>{btnText}</Button>
					</>
				}
			})
		)
	}
}

export default BottomSheet