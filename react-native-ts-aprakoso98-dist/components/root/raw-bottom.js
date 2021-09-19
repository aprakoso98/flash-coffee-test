import React, { useLayoutEffect, useRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useDispatch } from 'react-redux';
import { actionRB, useSelector } from '.';
import { View } from '../commons/View';
const RawBottom = () => {
    const ref = useRef(null);
    const dispatch = useDispatch();
    const { RB_SHEET: { children, props = {} } } = useSelector(state => state);
    const { customStyles = {}, ...rest } = props;
    const { container, draggableIcon, wrapper } = customStyles;
    useLayoutEffect(() => {
        dispatch(actionRB({ ref }));
    }, [ref]);
    return <RBSheet ref={ref} dragFromTopOnly closeOnDragDown closeOnPressBack animationType="slide" customStyles={{
        wrapper,
        container: {
            minHeight: 250,
            backgroundColor: 'transparent',
            ...container
        },
        draggableIcon: { width: 75, ...draggableIcon },
    }} {...rest}>
		<View flex>
			{children}
		</View>
	</RBSheet>;
};
export default RawBottom;
