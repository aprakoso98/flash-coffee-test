import { Animated, LayoutAnimationConfig } from "react-native";
declare type UseAnimatedReturn<D> = [
    Unpacked<D[]>,
    {
        value: Animated.Value;
        animate: (toValue: Unpacked<D[]>, config?: Partial<Omit<Animated.TimingAnimationConfig, 'toValue'>>) => void;
        interpolate: (config?: Omit<Animated.InterpolationConfigType, 'inputRange' | 'outputRange'>) => Animated.AnimatedInterpolation;
    }
];
export declare const useAnimated: <D extends number>(inputRange: D[], outputRange: number[] | string[]) => UseAnimatedReturn<D>;
export declare const createLayoutAnimationPresets: (config: LayoutAnimationConfig) => LayoutAnimationConfig;
export {};
