import React from 'react';
import { TouchableOpacity } from 'react-native';
import { getFlexBox } from '../../';
import { Text } from "./Text";
export const Button = (props) => {
    const { flexBoxStyleProps, restProps } = getFlexBox(props);
    const { children, radius, colors, sizes, fonts, textProps, textStyle, color, compRef, style, ...rest } = restProps;
    const borderRadius = SizeMap({ sizes, size: radius });
    const [backgroundColor, textColor, borderColor] = (color || []).map(color => ColorMap({ colors, color }));
    const myStyle = {
        borderRadius, backgroundColor, borderColor,
        ...flexBoxStyleProps
    };
    return <TouchableOpacity ref={compRef} style={[myStyle, style].toRnStyle()} {...rest}>
		{typeof children === 'string' ? <Text colors={colors} fonts={fonts} sizes={sizes} style={textStyle} color={textColor} {...textProps}>{children}</Text> :
        children}
	</TouchableOpacity>;
};
export const createButton = (iProps) => {
    const { props, defaultColor, colors, fonts, sizes, defaultFont, defaultSize } = iProps;
    return (theProps) => {
        const _props = typeof props === 'function' ? props(theProps) : typeof props !== 'undefined' ? props : {};
        const { textProps, textStyle, style, ...propsOverride } = _props;
        const { style: styleOverride, textStyle: textStyleOverride, textProps: textPropsOverride, ...rest } = theProps;
        return <Button color={defaultColor} colors={colors} fonts={fonts} sizes={sizes} textStyle={{ ...textStyle, ...textStyleOverride }} textProps={{ font: defaultFont, size: defaultSize, ...textProps, ...textPropsOverride }} style={[style, styleOverride]} {...propsOverride} {...rest}/>;
    };
};
