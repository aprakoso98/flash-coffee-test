import { ImageProps as RNImageProps, ImageStyle } from 'react-native';
import { ViewProps } from './View';
export declare type ImageProps<C> = Omit<RNImageProps, 'style'> & {
    style?: ImageStyle;
    viewProps?: Omit<ViewProps<C>, 'style'>;
    containerStyle?: ViewProps<C>['style'];
} & ({
    fit?: false;
    maxHeight?: undefined;
    maxWidth?: undefined;
    ratio?: undefined;
} | {
    fit?: true;
    maxHeight?: number;
    maxWidth?: number;
    ratio?: string;
});
export declare const Image: <C extends Record<string, string>>(props: ImageProps<C>) => JSX.Element | null;
