import { useEffect, useState } from "react";
import { Animated } from "react-native";
export const useAnimated = (inputRange, outputRange) => {
    const [value, setValue] = useState(0);
    const [animatedValue] = useState(new Animated.Value(0));
    useEffect(() => {
        animatedValue.addListener(({ value }) => setValue(value));
        return () => animatedValue.removeAllListeners();
    }, []);
    return [
        value,
        {
            value: animatedValue,
            interpolate: (config) => {
                return animatedValue.interpolate({ inputRange, outputRange, ...config });
            },
            animate: (toValue, config) => {
                Animated.timing(animatedValue, {
                    toValue,
                    useNativeDriver: false,
                    duration: 250,
                    ...config
                }).start();
            }
        }
    ];
};
export const createLayoutAnimationPresets = (config) => {
    return config;
};
