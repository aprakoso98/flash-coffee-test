import { ReactNode, Ref } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { FlexBox } from '../../';
import { TextProps } from "./Text";
export declare type RefButton = TouchableOpacity;
export declare type ButtonProps<C, S, F> = TouchableOpacityProps & {
    /** Replacement for react ref */
    compRef?: Ref<RefButton>;
    radius?: TypeProp<S, number>;
    children?: ReactNode;
    textProps?: Omit<TextProps<C, S, F>, 'children' | 'style' | 'sizes' | 'colors' | 'fonts'>;
    textStyle?: TextProps<C, S, F>['style'];
    /** Need array of string to complete [backgroundColor, textColor, borderColor] */
    color?: Tuple<TypeProp<C>, 1 | 2 | 3>;
    colors?: C;
    sizes?: S;
    fonts?: F;
} & FlexBox;
export declare const Button: <C extends Record<string, string>, S extends Record<string, number>, F extends Record<string, string>>(props: ButtonProps<C, S, F>) => JSX.Element;
declare type PropsRet<C, S, F> = Omit<ButtonProps<C, S, F>, 'sizes' | 'colors' | 'fonts'>;
declare type IProps<C, S, F> = {
    defaultSize?: keyof S;
    defaultFont?: keyof F;
    defaultColor?: Tuple<TypeProp<C>, 1 | 2 | 3>;
    props?: ((props: PropsRet<C, S, F>) => PropsRet<C, S, F>) | PropsRet<C, S, F>;
} & Pick<ButtonProps<C, S, F>, 'sizes' | 'colors' | 'fonts'>;
export declare const createButton: <C extends Record<string, string>, S extends Record<string, number>, F extends Record<string, string>>(iProps: IProps<C, S, F>) => (theProps: Pick<ButtonProps<C, S, F>, "children" | "style" | "relative" | "absolute" | "top" | "right" | "bottom" | "left" | "row" | "col" | "reverse" | "zIndex" | "items" | "itemsBaseline" | "itemsCenter" | "itemsEnd" | "itemsStart" | "itemsStretch" | "content" | "contentCenter" | "contentEnd" | "contentStart" | "contentStretch" | "contentAround" | "contentBetween" | "justify" | "justifyCenter" | "justifyEnd" | "justifyStart" | "justifyAround" | "justifyBetween" | "justifyEvenly" | "self" | "selfCenter" | "selfEnd" | "selfStart" | "selfStretch" | "selfAuto" | "activeOpacity" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "disabled" | "hitSlop" | "onBlur" | "onFocus" | "onLayout" | "onLongPress" | "onPress" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "testID" | "hasTVPreferredFocus" | "tvParallaxProperties" | "touchSoundDisabled" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "compRef" | "radius" | "textProps" | "textStyle" | "color" | "flex" | "wrap" | "direction" | "height" | "width">) => JSX.Element;
export {};
