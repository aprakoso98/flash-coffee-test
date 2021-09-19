import React, { useEffect, useState } from 'react';
import { Text, View } from "../../";
export const List = (props) => {
    const { renderNumbering: RenderNumber, itemsStyle, style: listStyle, typeStyle, itemsProps, typeProps, type = 'disc', children, ...listProps } = props;
    const [width, setWidth] = useState(0);
    const child = Array.isArray(children) ? children : [children];
    const listTypeConvert = (num) => {
        switch (type) {
            case '1':
                return `${(num)}.`;
            case 'a':
                return `${(num).toAlphabet()}.`;
            case 'A':
                return `${(num).toAlphabet().toUpperCase()}.`;
            case 'I':
                return `${(num).toRoman()}.`;
            case 'i':
                return `${(num).toRoman().toLowerCase()}.`;
            case 'circle':
                return '◯';
            case 'disc':
                return '●';
            case 'square':
                return '⃞';
            case 'none':
                return '';
            default: return '●';
        }
    };
    const getWidthItems = () => {
        let length = 0;
        for (let i = 0; i < child.length; i++) {
            const theNumber = listTypeConvert(i + 1);
            if (theNumber.length > length)
                length = theNumber.length;
        }
        return length;
    };
    const RenderListType = ({ index }) => {
        const style = {
            get width() {
                return width * 8;
            },
            marginRight: type === 'none' ? undefined : 5
        };
        const child = listTypeConvert(index + 1);
        if (RenderNumber) {
            return RenderNumber(child);
        }
        return <Text alignRight style={[style, typeStyle]} size={['disc', 'circle', 'square'].includes(type) ? 10 : undefined} {...typeProps}>{child}</Text>;
    };
    useEffect(() => {
        setWidth(getWidthItems());
    }, [type]);
    return <View style={listStyle} {...listProps}>
		{child.rMap((children, i) => <View row style={itemsStyle} {...itemsProps}>
			<RenderListType index={i}/>
			{children}
		</View>)}
	</View>;
};
export const createList = (iProps) => {
    const { props = {}, colors, fonts, sizes } = iProps;
    const { style, itemsStyle, itemsProps, typeStyle, typeProps, ...restProps } = props;
    return (propsOverride) => {
        const { itemsProps: itemsPropsOverride, itemsStyle: itemsStyleOverride, typeStyle: typeStyleOverride, typeProps: typePropsOverride, style: styleOverride, ...restPropsOverride } = propsOverride;
        return <List style={{ ...style, ...styleOverride }} itemsStyle={{ ...itemsStyle, ...itemsStyleOverride }} typeStyle={{ ...typeStyle, ...typeStyleOverride }} itemsProps={{
            backgroundColors: colors,
            ...itemsProps,
            ...itemsPropsOverride
        }} typeProps={{
            fonts, sizes, colors,
            ...typeProps,
            ...typePropsOverride
        }} {...restProps} {...restPropsOverride}/>;
    };
};
