import React, { Fragment } from 'react';
import RNModal from 'react-native-modal';
import { useSelector } from '.';
const Modal = () => {
    const { MODAL: { children, ...rest } } = useSelector(state => state);
    return <RNModal children={children || <Fragment />} {...rest}/>;
};
export default Modal;
