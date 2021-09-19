import React, { createRef, forwardRef, useEffect, useImperativeHandle } from 'react';
import { Modal as RNModal } from 'react-native';
import { useToggle } from '../../hooks';
import { SafeAreaView } from './View';
const modal = (modalProps, ref) => {
    const { children, onRequestClose, animationType, onDismiss, onShow, visible: initIsVisible = false, ...viewProps } = modalProps;
    const modalRef = createRef();
    const [visible, setVisible] = useToggle(initIsVisible);
    useImperativeHandle(ref, () => ({
        ...modalRef.current,
        show: () => setVisible(true),
        hide: () => setVisible(false),
    }));
    useEffect(() => {
        setVisible(initIsVisible);
    }, [initIsVisible]);
    return <RNModal transparent ref={modalRef} visible={visible} animationType={animationType} onDismiss={onDismiss} onRequestClose={onRequestClose} onShow={onShow}>
		<SafeAreaView flex {...viewProps}>
			{children}
		</SafeAreaView>
	</RNModal>;
};
export const Modal = forwardRef(modal);
export const createModal = (iProps) => {
    const { props = {}, colors, defaultBackgroundColor: backgroundColor } = iProps;
    const { style: styleOverride, ...propsOverride } = props;
    return forwardRef(({ style, ...rest }, ref) => {
        return <Modal ref={ref} style={{ ...styleOverride, ...style }} backgroundColor={backgroundColor} backgroundColors={colors} {...propsOverride} {...rest}/>;
    });
};
