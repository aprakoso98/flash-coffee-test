import React from 'react';
import { Alert as AlertRN } from 'react-native';
import { View, Text, Button, MModal } from '../';
const convertButton = (btn) => {
    const [text, onPress, style] = btn || [];
    return { onPress, style, text };
};
export const Alert = (...params) => {
    const [message, options = {}] = params;
    if (typeof options === 'string') {
        AlertRN.alert(message, options);
    }
    else {
        if (options.usingModal) {
            const { buttons = [['Ok', { onPress: MModal.hide }]], title = 'Alert', cancelable, onDismiss, modalOpt, colors, fonts, sizes, messageProps, titleProps, viewProps } = options;
            MModal.show(<View backgroundColors={colors} backgroundColor='white' style={{
                borderRadius: 5
            }} {...viewProps}>
				<View style={{ alignItems: 'center', padding: 10 }}>
					<Text colors={colors} sizes={sizes} size={17.5} fonts={fonts} {...titleProps}>{title}</Text>
					<Text colors={colors} sizes={sizes} size={14} fonts={fonts} {...messageProps}>{message}</Text>
				</View>
				{buttons.rMap(btn => {
                const [text, _props] = btn ?? [];
                const { style, ...props } = _props ?? {};
                return <>
						<View backgroundColor="gray" style={{ padding: .5 }}/>
						<Button style={[{ alignItems: 'center', padding: 10 }, style]} color={['', '#2962ff']} textProps={{ size: 16 }} colors={colors} sizes={sizes} fonts={fonts} {...props}>{text}</Button>
					</>;
            })}
			</View>, {
                onBackdropPress: cancelable ? MModal.hide : noop,
                onModalHide: onDismiss,
                ...modalOpt
            });
        }
        else {
            const { buttons = [['Ok']], title = 'Alert', cancelable, onDismiss } = options;
            AlertRN.alert(title, message, buttons.map(btn => convertButton(btn)), { cancelable, onDismiss });
        }
    }
};
