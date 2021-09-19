declare type RWProps = {
    i: number;
    index: number;
    isLast: boolean;
    children: JSX.Element[];
};
declare type GalleryProps<T> = {
    numColumns?: number;
    data: T[];
    renderItem: (item: {
        item: T;
        index: number;
        indexInRow: number;
        i: number;
        isLast: boolean;
        isLastInRow: boolean;
    }) => JSX.Element;
    renderContainer?: (props: {
        children: JSX.Element[];
    }) => JSX.Element;
    renderWrapper?: (props: RWProps) => JSX.Element;
};
declare const Gallery: <T>(props: GalleryProps<T>) => JSX.Element;
export default Gallery;
