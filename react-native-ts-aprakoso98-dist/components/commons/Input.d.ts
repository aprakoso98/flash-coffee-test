import { TextInput, TextInputProps } from "react-native";
import { ViewProps } from './View';
import { TextProps } from './Text';
export declare type RefInput = TextInput;
export declare type InputProps<C, S, F> = TextInputProps & {
    colors?: C;
    sizes?: S;
    fonts?: F;
    noLabel?: boolean;
    accessoryOut?: boolean;
    propsContentContainer?: ViewProps<C> & {
        backgroundColor?: TypeProp<C, string>;
    };
    propsInputContainer?: ViewProps<C> & {
        backgroundColor?: TypeProp<C, string>;
    };
    propsLeftAccessory?: ViewProps<C> & {
        backgroundColor?: TypeProp<C, string>;
    };
    propsRightAccessory?: ViewProps<C> & {
        backgroundColor?: TypeProp<C, string>;
    };
    propsLabel?: TextProps<C, S, F> & {
        color?: TypeProp<C, string>;
        size?: TypeProp<S, string>;
        font?: TypeProp<F, string>;
    };
};
export declare const Input: <C extends Record<string, string>, S extends Record<string, number>, F extends Record<string, string>>(props: InputProps<C, S, F>) => JSX.Element;
declare type IProps<C, S, F> = {
    colors?: C;
    defaultColor?: keyof C;
    sizes?: S;
    defaultSize?: keyof S;
    fonts?: F;
    defaultFont?: keyof F;
};
export declare const createInput: <C extends Record<string, string>, S extends Record<string, number>, F extends Record<string, string>>(iProps: IProps<C, S, F>) => (props: Pick<InputProps<C, S, F>, "style" | "hitSlop" | "onBlur" | "onFocus" | "onLayout" | "testID" | "hasTVPreferredFocus" | "tvParallaxProperties" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "removeClippedSubviews" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "allowFontScaling" | "numberOfLines" | "maxFontSizeMultiplier" | "selectionColor" | "textBreakStrategy" | "textAlign" | "textAlignVertical" | "noLabel" | "value" | "accessoryOut" | "autoCapitalize" | "autoCorrect" | "autoFocus" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "defaultValue" | "editable" | "keyboardType" | "maxLength" | "multiline" | "onChange" | "onChangeText" | "onContentSizeChange" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "onScroll" | "onKeyPress" | "placeholder" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "inputAccessoryViewID" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "spellCheck" | "textContentType" | "scrollEnabled" | "autoCompleteType" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "showSoftInputOnFocus" | "propsContentContainer" | "propsInputContainer" | "propsLeftAccessory" | "propsRightAccessory" | "propsLabel">) => JSX.Element;
export {};
