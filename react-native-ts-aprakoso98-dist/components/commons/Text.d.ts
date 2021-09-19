import { ReactNode, Ref } from 'react';
import { Text as TextRN, Animated, TextProps as RNTextProps, TextStyle } from 'react-native';
import { Flex, Position, Size, TextAlign } from '../../';
export declare type RefText = TextRN;
export declare type TextProps<C, S, F> = Animated.AnimatedProps<Omit<RNTextProps, 'style'>> & {
    /** Replacement for react ref */
    compRef?: Ref<RefText>;
    style?: Animated.WithAnimatedValue<TextStyle | TextStyle[]>;
    children?: ReactNode;
} & {
    colors?: C;
    color?: TypeProp<C>;
    sizes?: S;
    size?: TypeProp<S, number>;
    fonts?: F;
    font?: TypeProp<F>;
} & TextAlign & Omit<Flex, 'row' | 'col'> & Position & Size;
export declare const Text: <C extends Record<string, string>, S extends Record<string, number>, F extends Record<string, string>>(props: TextProps<C, S, F>) => JSX.Element;
declare type IProps<C, S, F> = {
    defaultColor?: keyof C;
    defaultSize?: keyof S;
    defaultFont?: keyof F;
    props?: Omit<TextProps<C, S, F>, 'sizes' | 'colors' | 'fonts'>;
} & Pick<TextProps<C, S, F>, 'sizes' | 'colors' | 'fonts'>;
export declare const createText: <C extends Record<string, string>, S extends Record<string, number>, F extends Record<string, string>>(iProps: IProps<C, S, F>) => ({ style, ...rest }: Pick<TextProps<C, S, F>, "children" | "style" | "relative" | "absolute" | "top" | "right" | "bottom" | "left" | "reverse" | "zIndex" | "onLayout" | "onLongPress" | "onPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "compRef" | "color" | "flex" | "wrap" | "direction" | "height" | "width" | "nativeID" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "align" | "alignRight" | "alignLeft" | "alignCenter" | "alignAuto" | "alignJustify" | "vAlignTop" | "vAlignBottom" | "vAlignCenter" | "vAlignAuto" | "size" | "font" | "vAlign">) => JSX.Element;
export {};
