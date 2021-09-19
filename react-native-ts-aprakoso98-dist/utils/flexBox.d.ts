import { ViewStyle, TextStyle } from "react-native";
export declare type Align = {
    align?: TextStyle['textAlign'];
} & Partial<ObjFromTuple<'auto' | 'left' | 'center' | 'right' | 'justify', 'align-'>>;
export declare type VAlign = {
    vAlign?: TextStyle['textAlignVertical'];
} & Partial<ObjFromTuple<'auto' | 'top' | 'center' | 'bottom', 'v-align-'>>;
export declare type Justify = {
    justify?: ViewStyle['justifyContent'];
} & Partial<ObjFromTuple<'center' | 'end' | 'start' | 'around' | 'between' | 'evenly', 'justify-'>>;
export declare type Items = {
    items?: ViewStyle['alignItems'];
} & Partial<ObjFromTuple<'baseline' | 'center' | 'end' | 'start' | 'stretch', 'items-'>>;
export declare type Content = {
    content?: ViewStyle['alignContent'];
} & Partial<ObjFromTuple<'center' | 'end' | 'start' | 'around' | 'between' | 'stretch', 'content-'>>;
export declare type Self = {
    self?: ViewStyle['alignSelf'];
} & Partial<ObjFromTuple<'auto' | 'start' | 'end' | 'center' | 'stretch', 'self-'>>;
export declare type Position = Partial<ObjFromTuple<'relative' | 'absolute'>> & Partial<ObjFromTuple<'z-index' | 'top' | 'right' | 'bottom' | 'left', '', number>>;
export declare type Flex = Partial<ObjFromTuple<'row' | 'col' | 'reverse'>> & {
    flex?: boolean | number;
    wrap?: ViewStyle['flexWrap'] | boolean;
    direction?: ViewStyle['flexDirection'];
};
export declare type Size = {
    height?: ViewStyle['height'];
    width?: ViewStyle['width'];
};
export declare type TextAlign = Align & VAlign;
export declare type FlexBox = Position & Flex & Items & Content & Justify & Self & Size;
declare type FlexAll = Position & Flex & Items & Content & Justify & Self & TextAlign & Size;
export declare const getFlexBox: <D extends FlexAll>(props: D) => {
    restProps: Pick<D, Exclude<keyof D, "relative" | "absolute" | "top" | "right" | "bottom" | "left" | "row" | "col" | "reverse" | "zIndex" | "items" | "itemsBaseline" | "itemsCenter" | "itemsEnd" | "itemsStart" | "itemsStretch" | "content" | "contentCenter" | "contentEnd" | "contentStart" | "contentStretch" | "contentAround" | "contentBetween" | "justify" | "justifyCenter" | "justifyEnd" | "justifyStart" | "justifyAround" | "justifyBetween" | "justifyEvenly" | "self" | "selfCenter" | "selfEnd" | "selfStart" | "selfStretch" | "selfAuto" | "flex" | "wrap" | "direction" | "height" | "width" | "align" | "alignRight" | "alignLeft" | "alignCenter" | "alignAuto" | "alignJustify" | "vAlignTop" | "vAlignBottom" | "vAlignCenter" | "vAlignAuto" | "vAlign">>;
    flexBoxStyleProps: {
        width: string | number | undefined;
        height: string | number | undefined;
        zIndex: number | undefined;
        top: number | undefined;
        left: number | undefined;
        right: number | undefined;
        bottom: number | undefined;
        flexWrap: "wrap" | "nowrap" | "wrap-reverse" | undefined;
        readonly textAlign: "right" | "left" | "center" | "auto" | "justify" | undefined;
        readonly textAlignVertical: "top" | "bottom" | "center" | "auto" | undefined;
        readonly flex: number | undefined;
        readonly flexDirection: "row" | "column" | "row-reverse" | "column-reverse";
        readonly position: "relative" | "absolute" | undefined;
        readonly justifyContent: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined;
        readonly alignItems: "baseline" | "center" | "stretch" | "flex-start" | "flex-end" | undefined;
        readonly alignSelf: "baseline" | "center" | "stretch" | "auto" | "flex-start" | "flex-end" | undefined;
        readonly alignContent: "center" | "stretch" | "flex-start" | "flex-end" | "space-between" | "space-around" | undefined;
    };
};
export {};
