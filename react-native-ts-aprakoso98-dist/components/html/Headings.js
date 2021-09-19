import React from 'react';
import { Text } from "../../";
export const Headings = (props) => {
    const { h1, h2, h3, h4, h5, h6, baseSize = 14, ...rest } = props;
    return <Text size={(() => {
        if (h6)
            return baseSize * 1.072;
        if (h5)
            return baseSize * 1.328;
        if (h4)
            return baseSize * 1.6;
        if (h3)
            return baseSize * 1.872;
        if (h2)
            return baseSize * 2.4;
        if (h1)
            return baseSize * 3.2;
        return baseSize;
    })()} {...rest}/>;
};
