import { ReactNode, RefObject } from 'react';
import RBSheet, { RBSheetProps } from 'react-native-raw-bottom-sheet';
export declare type RBProps = {
    ref?: RefObject<RBSheet>;
    props?: RBSheetProps;
    children: ReactNode;
};
declare const RawBottom: () => JSX.Element;
export default RawBottom;
