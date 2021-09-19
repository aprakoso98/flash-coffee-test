import React, { useEffect, useState } from 'react';
import { Image as RNImage } from 'react-native';
import { View } from './View';
export const Image = (props) => {
    let { fit, maxHeight, maxWidth, viewProps = {}, style, containerStyle, source, ...rest } = props;
    const { onLayout = noop, ...viewPropsRest } = viewProps;
    const [layout, setLayout] = useState({ width: 0, height: 0 });
    const [ratio, setRatio] = useState(0);
    const size = {
        width: layout.width,
        height: layout.width * ratio
    };
    const getSize = () => {
        if (!maxHeight || layout.height === 0 || layout.width === 0 || layout.height < maxHeight)
            return {};
        if (ratio < 1.5)
            return {};
        return {
            width: layout.width / (layout.width * ratio / maxHeight),
            height: maxHeight
        };
    };
    useEffect(() => {
        source = source;
        if (source.uri) {
            RNImage.getSize(source.uri, (width, height) => {
                const r = height / width;
                setRatio(r);
            });
        }
        else if (typeof source === 'number') {
            source = source;
            const { width, height } = RNImage.resolveAssetSource(source);
            const r = height / width;
            setRatio(r);
        }
    }, [layout.width, layout.height, source]);
    // @ts-ignore
    return (source && (source.uri || source.uri !== '' || typeof source === 'number')) ? <View style={{ overflow: 'hidden', ...containerStyle }} onLayout={event => {
        setLayout(event.nativeEvent.layout);
        onLayout(event);
    }} {...viewPropsRest}>
		<RNImage style={[style, size, getSize()].toRnStyle()} source={source} {...rest}/>
	</View> : null;
};
