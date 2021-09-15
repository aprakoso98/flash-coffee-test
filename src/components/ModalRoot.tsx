import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import store, { useSelector } from 'src/redux';
import Modal, { ModalProps } from 'react-native-modal'
import { SafeAreaView, View } from 'src/components'
import { Platform } from 'react-native';
import { colors, sizes } from 'src/utils/constants';
import { StatusBar } from 'react-native';
import { actionModal } from 'src/redux/app';
import { MModal, Image } from 'react-native-ts-aprakoso98';
import Icon from './Icon';

export type PropsModal = {
	children: JSX.Element
	props: ModalProps
	viewProps?: GetProps<typeof SafeAreaView>
}
const ModalRoot: FC = (props) => {
	const dispatch = useDispatch()
	const { children } = props
	const { MODAL } = useSelector(state => state)
	const { visible: stateVisible = false, props: _modal } = MODAL ?? {}
	const { viewProps, children: ModalChild, props: _modalProps } = _modal ?? {}
	const { onDismiss = noop, ...modalProps } = _modalProps ?? {}
	const [visible, _setVisible] = useState(false)
	const setVisible = (v: boolean) => {
		_setVisible(v)
		dispatch(actionModal({ visible: v }))
	}
	useEffect(() => {
		if (stateVisible) setVisible(true)
		else setVisible(false)
	}, [stateVisible])
	return <>
		<Modal
			// @ts-ignore
			isVisible={visible}
			// @ts-ignore
			onBackdropPress={() => setVisible(false)}
			// @ts-ignore
			onBackButtonPress={() => setVisible(false)}
			// @ts-ignore
			animationIn="slideInRight"
			// @ts-ignore
			animationOut="slideOutRight"
			style={{
				margin: 0
			}}
			onDismiss={() => {
				dispatch(actionModal({ visible: false }))
				onDismiss()
			}} {...modalProps}>
			<SafeAreaView backgroundColor="light" flex {...viewProps}>
				<StatusBar barStyle="dark-content" backgroundColor={Platform.OS === 'android' ? colors.dark : colors.light} />
				{ModalChild}
			</SafeAreaView>
		</Modal>
		{children}
	</>
}

export const ModalManager = {
	hide() {
		store.dispatch(actionModal({
			visible: false
		}))
	},
	show(children: PropsModal['children'], _props?: Partial<PropsModal['props'] & { viewProps?: Partial<PropsModal['viewProps']> }>) {
		const { viewProps, ...props } = _props ?? {}
		store.dispatch(
			actionModal({
				visible: true,
				props: { children, props: props as PropsModal['props'], viewProps }
			})
		)
	}
}

export const Loading = {
	hide: MModal.hide,
	show() {
		MModal.show(<View
			selfCenter
			itemsCenter
			width="25%"
			backgroundColor="light"
			style={{ borderRadius: sizes._radius, padding: sizes.content }}>
			<Icon spin size="t_big" name="spinner" />
		</View>, {
			onBackdropPress: noop,
			onBackButtonPress: noop,
			animationIn: 'fadeIn',
			animationOut: 'fadeOut',
			backdropColor: colors.dTransparent,
			animationOutTiming: 500,
			animationInTiming: 500,
		})
	},
}

export default ModalRoot