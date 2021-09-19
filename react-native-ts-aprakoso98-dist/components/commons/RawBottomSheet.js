import React, { useRef } from 'react';
import { useLayoutEffect } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Button, View } from '../../';
export const RawBottomSheet = (props) => {
    const { onOpen = noop, onClose = noop, manager, style, renderButtonProps = {}, renderButton: RenderButton, children, content: Content, height, customStyles = {}, ...rest } = props;
    const { onPress = noop, ...restRenderButton } = renderButtonProps;
    const { container, draggableIcon, wrapper } = customStyles;
    const sheetRef = useRef(null);
    useLayoutEffect(() => {
        if (manager) {
            manager({
                open: () => sheetRef.current?.open(),
                close: () => sheetRef.current?.close()
            });
        }
    }, []);
    return <>
		<RBSheet ref={sheetRef} dragFromTopOnly closeOnDragDown closeOnPressBack animationType="slide" onOpen={() => onOpen(sheetRef.current)} onClose={() => onClose(sheetRef.current)} customStyles={{
        wrapper,
        container: {
            minHeight: height ?? 250,
            backgroundColor: 'transparent',
            ...container
        },
        draggableIcon: { width: 75, ...draggableIcon },
    }} {...rest}>
			<View style={style} flex>
				{Content ? Content({ close: () => sheetRef.current?.close() }) : children}
			</View>
		</RBSheet>
		<Button onPress={(e) => {
        sheetRef.current?.open();
        onPress(e);
    }} {...restRenderButton}>
			{RenderButton && <RenderButton />}
		</Button>
	</>;
};
