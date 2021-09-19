export const getFlexBox = (props) => {
    const { width, height, direction, flex, reverse, wrap, col, row, absolute, relative, zIndex, top, left, right, bottom, content, contentCenter, contentEnd, contentStart, contentAround, contentBetween, contentStretch, items, itemsBaseline, itemsCenter, itemsEnd, itemsStart, itemsStretch, justify, justifyCenter, justifyEnd, justifyStart, justifyAround, justifyBetween, justifyEvenly, self, selfAuto, selfCenter, selfEnd, selfStart, selfStretch, align, alignAuto, alignLeft, alignRight, alignJustify, alignCenter, vAlign, vAlignAuto, vAlignTop, vAlignBottom, vAlignCenter, ...rest } = props;
    return {
        restProps: rest,
        flexBoxStyleProps: {
            width, height, zIndex, top, left, right, bottom,
            flexWrap: (typeof wrap === 'boolean') ? wrap ? 'wrap' : undefined : wrap,
            get textAlign() {
                if (align)
                    return align;
                if (alignAuto)
                    return 'auto';
                if (alignLeft)
                    return 'left';
                if (alignRight)
                    return 'right';
                if (alignJustify)
                    return 'justify';
                if (alignCenter)
                    return 'center';
                return undefined;
            },
            get textAlignVertical() {
                if (vAlign)
                    return vAlign;
                if (vAlignAuto)
                    return 'auto';
                if (vAlignTop)
                    return 'top';
                if (vAlignBottom)
                    return 'bottom';
                if (vAlignCenter)
                    return 'center';
                return undefined;
            },
            get flex() {
                switch (typeof flex) {
                    case 'number': return flex;
                    case 'boolean': return Boolean(flex) ? 1 : undefined;
                    default: return undefined;
                }
            },
            get flexDirection() {
                if (direction)
                    return direction;
                if (row)
                    return reverse ? 'row-reverse' : 'row';
                return reverse ? 'column-reverse' : 'column';
            },
            get position() {
                if (absolute)
                    return 'absolute';
                if (relative)
                    return 'relative';
                return undefined;
            },
            get justifyContent() {
                if (justify)
                    return justify;
                if (justifyEnd)
                    return 'flex-end';
                if (justifyStart)
                    return 'flex-start';
                if (justifyAround)
                    return 'space-around';
                if (justifyEvenly)
                    return 'space-evenly';
                if (justifyCenter)
                    return 'center';
                if (justifyBetween)
                    return 'space-between';
                return undefined;
            },
            get alignItems() {
                if (items)
                    return items;
                if (itemsEnd)
                    return 'flex-end';
                if (itemsStart)
                    return 'flex-start';
                if (itemsBaseline)
                    return 'baseline';
                if (itemsStretch)
                    return 'stretch';
                if (itemsCenter)
                    return 'center';
                return undefined;
            },
            get alignSelf() {
                if (self)
                    return self;
                if (selfEnd)
                    return 'flex-end';
                if (selfStart)
                    return 'flex-start';
                if (selfAuto)
                    return 'auto';
                if (selfStretch)
                    return 'stretch';
                if (selfCenter)
                    return 'center';
                return undefined;
            },
            get alignContent() {
                if (content)
                    return content;
                if (contentEnd)
                    return 'flex-end';
                if (contentStart)
                    return 'flex-start';
                if (contentAround)
                    return 'space-around';
                if (contentBetween)
                    return 'space-between';
                if (contentStretch)
                    return 'stretch';
                if (contentCenter)
                    return 'center';
                return undefined;
            }
        }
    };
};
