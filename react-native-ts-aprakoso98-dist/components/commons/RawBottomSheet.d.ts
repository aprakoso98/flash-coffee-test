import { ReactElement, RefObject } from 'react';
import { ViewStyle } from 'react-native';
import RBSheet, { RBSheetProps } from 'react-native-raw-bottom-sheet';
import { ButtonProps } from '../../';
export declare type SheetManager = Record<'open' | 'close', () => void>;
export declare type RawBottomProps<C, S, F> = Omit<RBSheetProps, 'onOpen' | 'onClose' | 'height'> & {
    renderButton?: () => JSX.Element;
    content?: (close: {
        close: () => void;
    }) => ReactElement | ReactElement[];
    manager?: (opener: SheetManager) => void;
    children?: ReactElement | ReactElement[];
    height?: string | number;
    renderButtonProps?: ButtonProps<C, S, F>;
    style?: ViewStyle;
} & Partial<Record<'onOpen' | 'onClose', (sheet: RefObject<RBSheet>['current']) => void>>;
export declare const RawBottomSheet: <C extends Record<string, string>, S extends Record<string, number>, F extends Record<string, string>>(props: RawBottomProps<C, S, F>) => JSX.Element;
