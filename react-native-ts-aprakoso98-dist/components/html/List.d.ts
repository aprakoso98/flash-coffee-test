import { ReactNode } from 'react';
import { TextProps, ViewProps } from "../../";
export declare type ListProps<C, S, F> = {
    type?: 'disc' | 'circle' | 'square' | 'none' | 'a' | 'A' | '1' | 'i' | 'I';
    children?: ReactNode;
    itemsStyle?: ViewProps<C>['style'];
    itemsProps?: Omit<ViewProps<C>, 'style'>;
    typeStyle?: TextProps<C, S, F>['style'];
    typeProps?: Omit<TextProps<C, S, F>, 'style'>;
    renderNumbering?: (children: string) => JSX.Element;
} & ViewProps<C>;
export declare const List: <C extends Record<string, string>, S extends Record<string, number>, F extends Record<string, string>>(props: ListProps<C, S, F>) => JSX.Element;
declare type IProps<C, S, F> = {
    props?: Omit<ListProps<C, S, F>, 'sizes' | 'colors' | 'fonts'>;
} & Pick<TextProps<C, S, F>, 'sizes' | 'colors' | 'fonts'>;
export declare const createList: <C extends Record<string, string>, S extends Record<string, number>, F extends Record<string, string>>(iProps: IProps<C, S, F>) => (propsOverride: Pick<ListProps<C, S, F>, "children" | "style" | "relative" | "absolute" | "top" | "right" | "bottom" | "left" | "row" | "col" | "reverse" | "zIndex" | "items" | "itemsBaseline" | "itemsCenter" | "itemsEnd" | "itemsStart" | "itemsStretch" | "content" | "contentCenter" | "contentEnd" | "contentStart" | "contentStretch" | "contentAround" | "contentBetween" | "justify" | "justifyCenter" | "justifyEnd" | "justifyStart" | "justifyAround" | "justifyBetween" | "justifyEvenly" | "self" | "selfCenter" | "selfEnd" | "selfStart" | "selfStretch" | "selfAuto" | "hitSlop" | "onLayout" | "testID" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "compRef" | "flex" | "wrap" | "direction" | "height" | "width" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "backgroundColors" | "backgroundColor" | "type" | "itemsStyle" | "itemsProps" | "typeStyle" | "typeProps" | "renderNumbering">) => JSX.Element;
export {};
