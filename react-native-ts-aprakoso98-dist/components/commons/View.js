import React, { useEffect, useState } from 'react';
import { Dimensions, Animated } from 'react-native';
import SafeArea from 'react-native-safe-area';
import { getFlexBox } from '../../';
export const getSafeAreaInsets = async () => {
    const { safeAreaInsets } = await SafeArea.getSafeAreaInsetsForRootView();
    return safeAreaInsets;
};
export const View = (props) => {
    const { flexBoxStyleProps, restProps } = getFlexBox(props);
    const { backgroundColors, backgroundColor, compRef, style, ...rest } = restProps;
    const stl = {
        backgroundColor: BGMap({ backgroundColor, backgroundColors }),
        ...flexBoxStyleProps
    };
    return <Animated.View ref={compRef} style={[stl, style].toRnStyle()} {...rest}/>;
};
export const Wrapper = (props) => {
    const { row = true, justifyBetween = true, ...rest } = props;
    return <View row={row} justifyBetween={justifyBetween} {...rest}/>;
};
export const SafeAreaView = (props) => {
    const { style, ...rest } = props;
    const { width, height } = Dimensions.get('window');
    const [insets, setInsets] = useState({});
    const safeAreaInsets = {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingRight: insets.right,
        paddingLeft: insets.left,
    };
    useEffect(() => {
        getSafeAreaInsets().then(safeAreaInsets => {
            setInsets(safeAreaInsets);
        });
    }, [width, height]);
    return <View style={[safeAreaInsets, style]} {...rest}/>;
};
export const createView = (iProps) => {
    const { props = {}, renderChildren, colors, sizes, defaultBackgroundColor: backgroundColor } = iProps;
    const { style: styleOverride, ...propsOverride } = props;
    return {
        Divider: (props) => {
            const { space = 0, vertical, color, size = 1, style, ...rest } = props;
            return <View style={{
                padding: (SizeMap({ sizes, size }) || 0) / 2,
                ...vertical ? { marginHorizontal: space } : { marginVertical: space },
                ...style
            }} backgroundColors={colors} backgroundColor={color || backgroundColor} {...propsOverride} {...rest}/>;
        },
        View: ({ children: child, style, ...rest }) => {
            const children = renderChildren ? renderChildren(child) : child;
            return <View style={{ ...styleOverride, ...style }} backgroundColor={backgroundColor} backgroundColors={colors} children={children} {...propsOverride} {...rest}/>;
        },
        Wrapper: ({ children: child, style, ...rest }) => {
            const children = renderChildren ? renderChildren(child) : child;
            return <Wrapper style={{ ...styleOverride, ...style }} backgroundColor={backgroundColor} backgroundColors={colors} children={children} {...propsOverride} {...rest}/>;
        },
        SafeAreaView: ({ children: child, style, ...rest }) => {
            const children = renderChildren ? renderChildren(child) : child;
            return <SafeAreaView style={{ ...styleOverride, ...style }} backgroundColor={backgroundColor} backgroundColors={colors} children={children} {...propsOverride} {...rest}/>;
        },
    };
};
export const createVieww = (iProps) => {
    const { props, propsCustom = () => ({}), renderChildren, colors, sizes, defaultBackgroundColor: backgroundColor } = iProps;
    const { style: styleOverride, ...propsOverride } = props ?? {};
    return {
        Divider: (theProps) => {
            const { space = 0, vertical, color, size = 1, style, ...rest } = theProps;
            return <View style={{
                padding: (SizeMap({ sizes, size }) || 0) / 2,
                ...vertical ? { marginHorizontal: space } : { marginVertical: space },
                ...style
            }} backgroundColors={colors} backgroundColor={color || backgroundColor} {...propsOverride} {...rest}/>;
        },
        View(theProps) {
            const { style: styleCustom, children: child, ...restCustom } = propsCustom(theProps) ?? {};
            const { style: style, ...rest } = theProps ?? {};
            const children = renderChildren ? renderChildren(child) : child;
            return <View children={children} backgroundColors={colors} backgroundColor={backgroundColor} style={[styleOverride, styleCustom, style]} {...propsOverride} {...restCustom} {...rest}/>;
        },
        Wrapper(theProps) {
            const { style: styleCustom, children: child, ...restCustom } = propsCustom(theProps) ?? {};
            const { style: style, ...rest } = theProps ?? {};
            const children = renderChildren ? renderChildren(child) : child;
            return <Wrapper children={children} backgroundColors={colors} backgroundColor={backgroundColor} style={[styleOverride, styleCustom, style]} {...propsOverride} {...restCustom} {...rest}/>;
        },
        SafeAreaView(theProps) {
            const { style: styleCustom, children: child, ...restCustom } = propsCustom(theProps) ?? {};
            const { style: style, ...rest } = theProps ?? {};
            const children = renderChildren ? renderChildren(child) : child;
            return <SafeAreaView children={children} backgroundColors={colors} backgroundColor={backgroundColor} style={[styleOverride, styleCustom, style]} {...propsOverride} {...restCustom} {...rest}/>;
        },
    };
};
