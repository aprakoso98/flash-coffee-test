import { ReactNode, Ref } from 'react';
import { Animated, View as RNView, ViewProps as RNViewProps, ViewStyle } from 'react-native';
import { SafeAreaInsets } from 'react-native-safe-area';
import { FlexBox } from '../../';
declare type VwStyle = Animated.WithAnimatedValue<ViewStyle>;
export declare type RefView = RNView;
export declare type ViewProps<C> = Animated.AnimatedProps<Omit<RNViewProps, 'style'>> & {
    children?: ReactNode;
    /** Replacement for react ref */
    compRef?: Ref<RefView>;
    style?: VwStyle | VwStyle[];
    backgroundColors?: C;
    backgroundColor?: TypeProp<C>;
} & FlexBox;
export declare const getSafeAreaInsets: () => Promise<SafeAreaInsets>;
export declare const View: <C extends Record<string, string>>(props: ViewProps<C>) => JSX.Element;
export declare const Wrapper: <C extends Record<string, string>>(props: ViewProps<C>) => JSX.Element;
export declare const SafeAreaView: <C extends Record<string, string>>(props: ViewProps<C>) => JSX.Element;
declare type IProps<C, S> = {
    colors?: C;
    sizes?: S;
    defaultBackgroundColor?: keyof C;
    props?: Omit<ViewProps<C>, 'backgroundColors'>;
    renderChildren?: (children: ReactNode) => ReactNode | ReactNode[];
};
export declare const createView: <C extends Record<string, string>, S extends Record<string, number>>(iProps: IProps<C, S>) => {
    Divider: (props: {
        color?: "" | keyof C | undefined;
        size?: (number & {
            property?: number | undefined;
        }) | keyof S | undefined;
        space?: number | undefined;
        vertical?: boolean | undefined;
    } & Pick<ViewProps<C>, "children" | "style" | "relative" | "absolute" | "top" | "right" | "bottom" | "left" | "row" | "col" | "reverse" | "zIndex" | "items" | "itemsBaseline" | "itemsCenter" | "itemsEnd" | "itemsStart" | "itemsStretch" | "content" | "contentCenter" | "contentEnd" | "contentStart" | "contentStretch" | "contentAround" | "contentBetween" | "justify" | "justifyCenter" | "justifyEnd" | "justifyStart" | "justifyAround" | "justifyBetween" | "justifyEvenly" | "self" | "selfCenter" | "selfEnd" | "selfStart" | "selfStretch" | "selfAuto" | "hitSlop" | "onLayout" | "testID" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "compRef" | "flex" | "wrap" | "direction" | "height" | "width" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "backgroundColor">) => JSX.Element;
    View: ({ children: child, style, ...rest }: Pick<ViewProps<C>, "children" | "style" | "relative" | "absolute" | "top" | "right" | "bottom" | "left" | "row" | "col" | "reverse" | "zIndex" | "items" | "itemsBaseline" | "itemsCenter" | "itemsEnd" | "itemsStart" | "itemsStretch" | "content" | "contentCenter" | "contentEnd" | "contentStart" | "contentStretch" | "contentAround" | "contentBetween" | "justify" | "justifyCenter" | "justifyEnd" | "justifyStart" | "justifyAround" | "justifyBetween" | "justifyEvenly" | "self" | "selfCenter" | "selfEnd" | "selfStart" | "selfStretch" | "selfAuto" | "hitSlop" | "onLayout" | "testID" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "compRef" | "flex" | "wrap" | "direction" | "height" | "width" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "backgroundColor">) => JSX.Element;
    Wrapper: ({ children: child, style, ...rest }: Pick<ViewProps<C>, "children" | "style" | "relative" | "absolute" | "top" | "right" | "bottom" | "left" | "row" | "col" | "reverse" | "zIndex" | "items" | "itemsBaseline" | "itemsCenter" | "itemsEnd" | "itemsStart" | "itemsStretch" | "content" | "contentCenter" | "contentEnd" | "contentStart" | "contentStretch" | "contentAround" | "contentBetween" | "justify" | "justifyCenter" | "justifyEnd" | "justifyStart" | "justifyAround" | "justifyBetween" | "justifyEvenly" | "self" | "selfCenter" | "selfEnd" | "selfStart" | "selfStretch" | "selfAuto" | "hitSlop" | "onLayout" | "testID" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "compRef" | "flex" | "wrap" | "direction" | "height" | "width" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "backgroundColor">) => JSX.Element;
    SafeAreaView: ({ children: child, style, ...rest }: Pick<ViewProps<C>, "children" | "style" | "relative" | "absolute" | "top" | "right" | "bottom" | "left" | "row" | "col" | "reverse" | "zIndex" | "items" | "itemsBaseline" | "itemsCenter" | "itemsEnd" | "itemsStart" | "itemsStretch" | "content" | "contentCenter" | "contentEnd" | "contentStart" | "contentStretch" | "contentAround" | "contentBetween" | "justify" | "justifyCenter" | "justifyEnd" | "justifyStart" | "justifyAround" | "justifyBetween" | "justifyEvenly" | "self" | "selfCenter" | "selfEnd" | "selfStart" | "selfStretch" | "selfAuto" | "hitSlop" | "onLayout" | "testID" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "compRef" | "flex" | "wrap" | "direction" | "height" | "width" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "backgroundColor">) => JSX.Element;
};
declare type TheProps<C, AP> = Omit<ViewProps<C>, 'backgroundColors'> & AP;
declare type IIProps<C, S, AP> = {
    colors?: C;
    sizes?: S;
    additionalProps?: AP;
    props?: TheProps<C, AP>;
    defaultBackgroundColor?: keyof C;
    propsCustom?: (props: TheProps<C, AP>) => TheProps<C, AP>;
    renderChildren?: (children: ReactNode) => ReactNode | ReactNode[];
};
export declare const createVieww: <C extends Record<string, string>, S extends Record<string, number>, AP extends Record<string, unknown>>(iProps: IIProps<C, S, AP>) => {
    Divider: (theProps: {
        color?: "" | keyof C | undefined;
        size?: (number & {
            property?: number | undefined;
        }) | keyof S | undefined;
        space?: number | undefined;
        vertical?: boolean | undefined;
    } & NonNullable<TheProps<C, AP>>) => JSX.Element;
    View(theProps: NonNullable<TheProps<C, AP>>): JSX.Element;
    Wrapper(theProps: NonNullable<TheProps<C, AP>>): JSX.Element;
    SafeAreaView(theProps: NonNullable<TheProps<C, AP>>): JSX.Element;
};
export {};
