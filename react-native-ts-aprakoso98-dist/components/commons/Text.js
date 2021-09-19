import React from 'react';
import { Animated } from 'react-native';
import { getFlexBox } from '../../';
export const Text = (props) => {
    const { flexBoxStyleProps, restProps } = getFlexBox(props);
    const { font, fonts, sizes, size, colors, color, style, compRef: ref, ...rest } = restProps;
    const myStyle = {
        fontFamily: FontMap({ fonts, font }),
        color: ColorMap({ colors, color }),
        fontSize: SizeMap({ sizes, size }),
        ...flexBoxStyleProps
    };
    return <Animated.Text ref={ref} style={[myStyle, style].toRnStyle()} {...rest}/>;
};
export const createText = (iProps) => {
    const { props = {}, colors, sizes, fonts, defaultColor: color, defaultFont: font, defaultSize: size } = iProps;
    const { style: styleOverride, ...propsOverride } = props;
    return ({ style, ...rest }) => {
        return <Text style={{ ...styleOverride, ...style }} {...propsOverride} color={color} font={font} size={size} colors={colors} fonts={fonts} sizes={sizes} {...rest}/>;
    };
};
