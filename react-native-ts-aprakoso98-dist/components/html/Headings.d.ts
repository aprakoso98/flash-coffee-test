import { TextProps } from "../../";
export declare type HeadingProps<C, S, F> = Omit<TextProps<C, S, F>, 'size'> & {
    baseSize?: number;
} & Partial<ObjFromTuple<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>>;
export declare const Headings: <C extends Record<string, string>, S extends Record<string, number>, F extends Record<string, string>>(props: HeadingProps<C, S, F>) => JSX.Element;
