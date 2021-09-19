import React from 'react';
import { View as TheView, Wrapper as TheWrapper } from '../../';
const Gallery = (props) => {
    let index = 0;
    const { data, numColumns = 1, renderItem, renderContainer, renderWrapper } = props;
    const newData = data.reduce((ret, current, i) => {
        let currentData = ret[index] ?? [];
        currentData.push(current);
        ret[index] = currentData;
        if (currentData.length === numColumns)
            index++;
        else if (data.length - 1 === i && currentData.length < numColumns) {
            const fillData = new Array(numColumns - currentData.length).fill('');
            currentData = [...currentData, ...fillData];
            ret[index] = currentData;
        }
        return ret;
    }, []);
    const View = renderContainer ?? (({ children }) => TheView({ children }));
    const children = newData.rMap((wrapper, columnIndex) => {
        const Wrapper = renderWrapper ?? (({ children }) => TheWrapper({ children }));
        const isLast = newData.length - 1 === columnIndex;
        const children = wrapper.rMap((item, indexInRow) => {
            const index = data.indexOf(item);
            return renderItem({
                item,
                index,
                i: index,
                indexInRow,
                isLast: data.length - 1 === index,
                isLastInRow: wrapper.length - 1 === indexInRow
            });
        });
        const wProps = { children, i: columnIndex, index: columnIndex, isLast };
        return <Wrapper {...wProps}/>;
    });
    return <View>{children}</View>;
};
export default Gallery;
