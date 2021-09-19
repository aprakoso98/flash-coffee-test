import { Moment } from "moment";
import { ForwardedRef, MutableRefObject } from "react";
import { NavigationScreenProp } from "react-navigation";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { AlertProps } from "./helper";
declare global {
    type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
    type ThenArg<T> = T extends Promise<infer U> ? U : T;
    type ReturnTypePromise<T extends (...args: any) => any> = ThenArg<ReturnType<T>>;
    type Rename<T, K extends keyof T, N extends string> = Pick<T, Exclude<keyof T, K>> & {
        [P in N]: T[K];
    };
    type PartialExcept<T extends {}, U extends keyof T> = Partial<Omit<T, U>> & Pick<T, U>;
    type GetProps<C extends (...args: any) => unknown, Exclude extends string | false = false> = Exclude extends string ? Omit<Parameters<C>[0], Exclude> : Parameters<C>[0];
    type RefProps<R> = Partial<Record<'ref', MutableRefObject<R | null> | ForwardedRef<R>>>;
    type ScreenProps<P = {}, S = {}> = {
        navigation: NavigationScreenProp<S, P>;
    };
    type StackScreenProps<P = {}, S = {}> = {
        navigation: StackNavigationProp<S, P>;
    };
    type Unpacked<T> = T extends (infer U)[] ? U : T;
    type MyObject<T = string> = Record<string, T>;
    type Dict<V = string, K extends string = string> = Record<K, V>;
    type Prepend<I, T extends unknown[]> = [I, ...T];
    type Append<I, T extends unknown[]> = [...T, I];
    type AddBetween<I, T extends unknown[], U extends unknown[]> = [...T, I, ...U];
    type Tuple<T, N extends number = 1> = N extends N ? number extends N ? T[] : _TupleOf<T, N, []> : never;
    type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N ? R : _TupleOf<T, N, [T, ...R]>;
    type ToString<R extends string, L extends string = ''> = `${L}${R}`;
    type CamelCase<Separator extends string, S extends string> = S extends `${infer P1}${Separator}${infer P2}${infer P3}` ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<Separator, P3>}` : Lowercase<S>;
    type KeysToCamelCase<S extends string, T> = {
        [K in keyof T as CamelCase<S, string & K>]: T[K] extends {} ? KeysToCamelCase<S, T[K]> : T[K];
    };
    type ObjFromTuple<T extends string, S extends string = '', Type = boolean> = KeysToCamelCase<'-', Record<ToString<T, S>, Type>>;
    type TypeProp<A extends {}, B = string> = keyof A | (B extends string ? '' : B & {
        property?: B;
    });
    type Create<K extends string, A, B = string> = {
        [Q in K as `${Q}s`]?: A;
    } & {
        [Q in K]?: TypeProp<A, B>;
    };
    type ColorProps<C> = Create<'color', C>;
    type SizeProps<S> = Create<'size', S, number>;
    type FontProps<F> = Create<'font', F>;
    type BGProps<C> = Create<'backgroundColor', C>;
    type TheValue<C, S, F> = {
        colors?: C;
        sizes?: S;
        fonts?: F;
    };
    type TheDefaultValue<C, S, F> = {
        defaultSize?: keyof S;
        defaultFont?: keyof F;
        defaultColor?: Tuple<TypeProp<C>, 1 | 2 | 3>;
    };
    type CombinedValue<C, S, F> = TheDefaultValue<C, S, F> & TheValue<C, S, F>;
    function prettyConsole(...args: any[]): void;
    function animate(...args: any[]): void;
    function ColorMap<C extends MyObject>(props: ColorProps<C>): string;
    function BGMap<C extends MyObject>(props: BGProps<C>): string;
    function SizeMap<S extends MyObject<number>>(props: SizeProps<S>): number;
    function FontMap<F extends MyObject>(props: FontProps<F>): string;
    function normalize(size: number): number;
    function noop(): null;
    function noopV(): void;
    function Alert<C extends MyObject, S extends MyObject<number>, F extends MyObject>(...params: AlertProps<C, S, F>): void;
    interface toBase64Type {
        error?: boolean;
        file: string;
        format: string;
        name: string;
    }
    interface FormData {
        appendObject(obj: MyObject<any>, except?: string[]): void;
    }
    interface Array<T> {
        toRnStyle: () => T[];
        generateEmpty<F extends unknown>(length: number, fill?: F): T[] | F[];
        rMap(callback: (data: T, key: number, isLast: boolean) => undefined | null | false | JSX.Element | JSX.Element[]): JSX.Element[];
        mapSync(callBack: (returnType: {
            data: T;
            index: number;
            callBack: (timeout?: number) => void;
        }) => void, reverse?: boolean, index?: number): void;
    }
    interface Number {
        /**
         * @param si True to use metric (SI) units, aka powers of 1000. False to use binary (IEC), aka powers of 1024.
         * @param dp Number of decimal places to display.
         */
        humanFileSize(si?: boolean, dp?: number): string;
        getPercentage(total?: number, dp?: number): number;
        ratio(ratio: string): {
            width: number;
            height: number;
        };
        format(delimiter?: number, count?: number): string;
        convertRupiah(): string;
        toRoman(): string;
        toAlphabet(): string;
        toDigit(digit?: number): string;
        extractNumber(): number;
        getNearestFifty(multiple?: number): number;
    }
    interface String {
        toMoment(): Moment;
        hidePhoneNumber(): string;
        format(delimiter?: number, count?: number): string;
        toDigit(digit?: number): string;
        getPhoneNumber(): string;
        phoneFormat(): string;
        isBase64File(): boolean;
        kebabToCamel(): string;
        snakeToCamel(): string;
        camelToSnake(): string;
        camelToKebab(): string;
        uuid(): string;
        openUrl(): void;
        validURL(): boolean;
        generateInitial(): string;
        ucfirst(): string;
        lcfirst(): string;
        ucwords(): string;
        isBool(): boolean;
        /** convert 123456 become Rp. 123.456 */
        convertRupiah(): string;
        /** convert Rp. 123.456 become 123456 */
        extractNumber(): number;
        toInt(): number;
        getRawUrl(): string;
        getParamFromUrl(): MyObject;
    }
    interface Math {
        randomInt: (min: number, max: number) => number;
    }
    interface Object {
        toQueryParams: (object: Partial<MyObject>) => string;
    }
}
export {};
