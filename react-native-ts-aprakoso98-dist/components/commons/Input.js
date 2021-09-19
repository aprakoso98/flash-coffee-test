import React, { useEffect, useState } from 'react';
import { LayoutAnimation, Platform, TextInput, UIManager } from "react-native";
import { View } from './View';
import { Text } from './Text';
if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
export const Input = (props) => {
    const { onFocus = noop, onBlur = noop, noLabel, colors, value, accessoryOut, ..._props } = props;
    let { propsContentContainer = {}, propsInputContainer = {}, propsLabel = {}, propsLeftAccessory = {}, propsRightAccessory = {}, ...rest } = _props;
    propsLabel.colors = colors;
    propsContentContainer.backgroundColors = colors;
    propsInputContainer.backgroundColors = colors;
    propsLeftAccessory.backgroundColors = colors;
    propsRightAccessory.backgroundColors = colors;
    useEffect(() => {
        setFocus(value && value.length > 0 ? true : false);
    }, []);
    const initLayout = { x: 0, y: 0, width: 0, height: 0 };
    const [inputLayout, setInputLayout] = useState(initLayout);
    const [viewLayout, setViewLayout] = useState(initLayout);
    const [viewLeftLayout, setViewLeftLayout] = useState(initLayout);
    const [, setViewRightLayout] = useState(initLayout);
    const [focus, setFocus] = useState(false);
    const leftAcc = <View onLayout={({ nativeEvent: { layout } }) => setViewLeftLayout(layout)} {...propsLeftAccessory}/>;
    const rightAcc = <View onLayout={({ nativeEvent: { layout } }) => setViewRightLayout(layout)} {...propsRightAccessory}/>;
    const label = <View absolute style={[
        { zIndex: 99 },
        focus ?
            { top: -viewLayout.y, left: -viewLeftLayout.width } :
            { top: inputLayout.y, left: inputLayout.x }
    ]}><Text {...propsLabel}>Label</Text></View>;
    const input = <TextInput onLayout={({ nativeEvent: { layout } }) => setInputLayout(layout)} onFocus={(e) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setFocus(true);
        onFocus(e);
    }} onBlur={(e) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setFocus(e?.nativeEvent?.text?.length > 0);
        onBlur(e);
    }} value={value} {...rest}/>;
    if (accessoryOut) {
        return <View {...propsContentContainer}>
			{!noLabel && <Text color="transparent" {...propsLabel}/>}
			{leftAcc}
			<View onLayout={({ nativeEvent: { layout } }) => setViewLayout(layout)} {...propsInputContainer}>
				{!noLabel && label}
				{input}
			</View>
			{rightAcc}
		</View>;
    }
    return <View {...propsContentContainer}>
		{!noLabel && <Text color="transparent" {...propsLabel}/>}
		<View onLayout={({ nativeEvent: { layout } }) => setViewLayout(layout)} row justifyBetween {...propsInputContainer}>
			{leftAcc}
			<View flex>
				{!noLabel && label}
				{input}
			</View>
			{rightAcc}
		</View>
	</View>;
};
export const createInput = (iProps) => {
    const { colors, sizes, fonts, defaultColor: color, defaultFont: font, defaultSize: size } = iProps;
    return (props) => {
        return <Input 
        // color={color}
        // font={font}
        // size={size}
        {...props} colors={colors} fonts={fonts} sizes={sizes}/>;
    };
};
// import React, { useEffect, useState } from 'react';
// import { LayoutAnimation, LayoutRectangle, Platform, TextInput, TextInputProps, UIManager } from "react-native"
// import { Text, TextProps, View, ViewProps, Wrapper } from "react-native-ts-aprakoso98"
// type Props<C, S, F> = {
// 	noLabel?: boolean
// 	accessoryOut?: boolean
// 	renderLeftAccessory?: () => JSX.Element
// 	renderRightAccessory?: () => JSX.Element
// 	inputStyle?: TextInputProps['style']
// 	containerProps?: Omit<ViewProps<C>, 'style'>
// 	containerStyle?: ViewProps<C>['style']
// 	style?: ViewProps<C>['style']
// 	label?: string
// 	labelProps?: Omit<TextProps<C, S, F>, 'style'>
// 	labelStyle?: TextProps<C, S, F>['style']
// } & Omit<TextInputProps, 'style'>
// const Input = <C extends MyObject, S extends MyObject<number>, F extends MyObject>(props: Props<C, S, F>) => {
// 	const {
// 		label, labelStyle, labelProps,
// 		noLabel, renderLeftAccessory: LeftAccessory = noop, renderRightAccessory: RightAccessory = noop,
// 		onFocus = noop, containerProps, onBlur = noop, onChangeText = noop, accessoryOut, style, inputStyle, ...rest
// 	} = props
// 	const [focused, setFocused] = useState(false)
// 	const [haveValue, setValue] = useState(props.value || '')
// 	const [inputLayout, setInputLayout] = useState({} as LayoutRectangle)
// 	const [wrapperLayout, setWrapperLayout] = useState({} as LayoutRectangle)
// 	const Label = <View justifyCenter height={focused ? undefined : inputLayout?.height} top={focused ? undefined : wrapperLayout?.y} left={focused ? undefined : (inputLayout?.x || 0) + (wrapperLayout?.x || 0)} zIndex={99} absolute >
// 		<Text style={labelStyle} {...labelProps} >{label}</Text>
// 	</View>
// 	useEffect(() => {
// 		setFocused(haveValue ? true : false)
// 	}, [])
// 	return <Wrapper itemsCenter style={style} {...containerProps}>
// 		{accessoryOut && <LeftAccessory />}
// 		<View flex relative>
// 			{!noLabel && Label}
// 			{!noLabel && <Text {...labelProps} style={{
// 				...labelStyle,
// 				backgroundColor: 'transparent',
// 				borderColor: 'transparent'
// 			}} color="transparent">Label</Text>}
// 			<Wrapper itemsCenter onLayout={(e) => setWrapperLayout(e?.nativeEvent?.layout)}>
// 				{!accessoryOut && <LeftAccessory />}
// 				<TextInput
// 					onFocus={(e) => {
// 						animate()
// 						onFocus(e)
// 						setFocused(true)
// 					}}
// 					onChangeText={txt => {
// 						setValue(txt)
// 						onChangeText(txt)
// 					}}
// 					onBlur={(e) => {
// 						animate()
// 						onBlur(e)
// 						setFocused(haveValue ? true : false)
// 					}}
// 					onLayout={(e) => setInputLayout(e?.nativeEvent?.layout)}
// 					style={[{ flex: 1, padding: 0 }, inputStyle]}
// 					{...rest}
// 				/>
// 				{!accessoryOut && <RightAccessory />}
// 			</Wrapper>
// 		</View>
// 		{accessoryOut && <RightAccessory />}
// 	</Wrapper>
// }
// export default Input
