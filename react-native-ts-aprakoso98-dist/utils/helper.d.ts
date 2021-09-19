import { AlertButton as AlertButtonRN } from 'react-native';
import { ViewProps, TextProps, ButtonProps, ModalOpt } from '../';
declare type toOmit = 'colors' | 'sizes' | 'fonts' | 'children';
declare type AlertButton = [
    text: string,
    onPress?: () => void,
    style?: AlertButtonRN['style']
];
declare type AlertButtonModal<C, S, F> = [
    text: string,
    props?: Omit<ButtonProps<C, S, F>, toOmit>
];
declare type _AlertOptions = {
    title?: string;
    cancelable?: boolean;
    onDismiss?: () => void;
    buttons?: [
        btn1?: AlertButton,
        btn2?: AlertButton,
        btn3?: AlertButton
    ];
};
declare type AlertOptions<C, S, F> = (_AlertOptions & {
    usingModal?: false;
}) | (Omit<_AlertOptions, 'buttons'> & TheValue<C, S, F> & {
    usingModal: true;
    modalOpt?: ModalOpt;
    titleProps?: Omit<TextProps<C, S, F>, toOmit>;
    messageProps?: Omit<TextProps<C, S, F>, toOmit>;
    viewProps?: Omit<ViewProps<C>, 'backgroundColors'>;
    /** To hide alert, use MModal.hide() */
    buttons?: [
        btn1?: AlertButtonModal<C, S, F>,
        btn2?: AlertButtonModal<C, S, F>,
        btn3?: AlertButtonModal<C, S, F>
    ];
});
export declare type AlertProps<C, S, F> = [
    /** This become title if 2nd argument is string */
    message: string,
    /** If string, this become message */
    options?: string | AlertOptions<C, S, F>
];
export declare const Alert: <C extends Record<string, string>, S extends Record<string, number>, F extends Record<string, string>>(message: string, options?: string | (_AlertOptions & {
    usingModal?: false | undefined;
}) | (Pick<_AlertOptions, "title" | "cancelable" | "onDismiss"> & TheValue<C, S, F> & {
    usingModal: true;
    modalOpt?: Partial<Pick<import("react-native-modal").ModalProps, "style" | "hitSlop" | "onLayout" | "testID" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onDismiss" | "onSwipeStart" | "onSwipeMove" | "onSwipeComplete" | "onSwipeCancel" | "swipeDirection" | "onShow" | "hardwareAccelerated" | "onOrientationChange" | "presentationStyle" | "animationIn" | "animationInTiming" | "animationOut" | "animationOutTiming" | "avoidKeyboard" | "coverScreen" | "hasBackdrop" | "backdropColor" | "backdropOpacity" | "backdropTransitionInTiming" | "backdropTransitionOutTiming" | "customBackdrop" | "useNativeDriver" | "useNativeDriverForBackdrop" | "deviceHeight" | "deviceWidth" | "hideModalContentWhileAnimating" | "propagateSwipe" | "onModalShow" | "onModalWillShow" | "onModalHide" | "onModalWillHide" | "onBackButtonPress" | "onBackdropPress" | "swipeThreshold" | "scrollTo" | "scrollOffset" | "scrollOffsetMax" | "scrollHorizontal" | "statusBarTranslucent" | "supportedOrientations" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture">> | undefined;
    titleProps?: Pick<TextProps<C, S, F>, "style" | "relative" | "absolute" | "top" | "right" | "bottom" | "left" | "reverse" | "zIndex" | "onLayout" | "onLongPress" | "onPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "compRef" | "color" | "flex" | "wrap" | "direction" | "height" | "width" | "nativeID" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "align" | "alignRight" | "alignLeft" | "alignCenter" | "alignAuto" | "alignJustify" | "vAlignTop" | "vAlignBottom" | "vAlignCenter" | "vAlignAuto" | "size" | "font" | "vAlign"> | undefined;
    messageProps?: Pick<TextProps<C, S, F>, "style" | "relative" | "absolute" | "top" | "right" | "bottom" | "left" | "reverse" | "zIndex" | "onLayout" | "onLongPress" | "onPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "compRef" | "color" | "flex" | "wrap" | "direction" | "height" | "width" | "nativeID" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "align" | "alignRight" | "alignLeft" | "alignCenter" | "alignAuto" | "alignJustify" | "vAlignTop" | "vAlignBottom" | "vAlignCenter" | "vAlignAuto" | "size" | "font" | "vAlign"> | undefined;
    viewProps?: Pick<ViewProps<C>, "children" | "style" | "relative" | "absolute" | "top" | "right" | "bottom" | "left" | "row" | "col" | "reverse" | "zIndex" | "items" | "itemsBaseline" | "itemsCenter" | "itemsEnd" | "itemsStart" | "itemsStretch" | "content" | "contentCenter" | "contentEnd" | "contentStart" | "contentStretch" | "contentAround" | "contentBetween" | "justify" | "justifyCenter" | "justifyEnd" | "justifyStart" | "justifyAround" | "justifyBetween" | "justifyEvenly" | "self" | "selfCenter" | "selfEnd" | "selfStart" | "selfStretch" | "selfAuto" | "hitSlop" | "onLayout" | "testID" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "compRef" | "flex" | "wrap" | "direction" | "height" | "width" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "backgroundColor"> | undefined;
    /** To hide alert, use MModal.hide() */
    buttons?: [btn1?: AlertButtonModal<C, S, F> | undefined, btn2?: AlertButtonModal<C, S, F> | undefined, btn3?: AlertButtonModal<C, S, F> | undefined] | undefined;
}) | undefined) => void;
export {};
