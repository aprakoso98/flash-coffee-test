import { isValidElement, cloneElement } from 'react';
import { Dimensions, LayoutAnimation, PixelRatio, Platform, UIManager } from 'react-native';
import { Alert } from './helper';
import moment from 'moment';
// export { }
globalThis.prettyConsole = (...objects) => {
    objects.map(d => typeof d === 'object' ? console.log(JSON.stringify(d, null, 4)) : console.log(d));
};
globalThis.Alert = Alert;
globalThis.animate = () => {
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
};
globalThis.ColorMap = (props) => {
    const { colors, color: dColor } = props;
    return (colors && dColor ? colors[dColor] || dColor : dColor);
};
globalThis.BGMap = (props) => {
    const { backgroundColors, backgroundColor: dColor } = props;
    return (backgroundColors && dColor ? backgroundColors[dColor] || dColor : dColor);
};
globalThis.SizeMap = (props) => {
    const { sizes, size: dSize } = props;
    return (sizes && dSize ? sizes[dSize] || dSize : dSize);
};
globalThis.FontMap = (props) => {
    const { fonts, font: dFont } = props;
    return (fonts && dFont ? fonts[dFont] || dFont : dFont);
};
globalThis.normalize = (size) => {
    const { width: SCREEN_WIDTH } = Dimensions.get('window');
    const scale = SCREEN_WIDTH / 320;
    const newSize = size * scale;
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
    else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
};
globalThis.noop = function () {
    return null;
};
globalThis.noopV = function () {
};
// FileList.prototype.toBase64 = function () {
// 	const files = this
// 	const resolveData = ({ name, file, format }: { name: string, file: File, format: string }) => {
// 		return new Promise<toBase64Type>((resolve, reject) => {
// 			const reader = new FileReader()
// 			reader.readAsDataURL(file);
// 			reader.onload = () => resolve({ name, format, file: reader.result as string, })
// 			reader.onerror = error => reject({ name, format, file: JSON.stringify(error), error: true })
// 		})
// 	}
// 	return new Promise(async (resolve) => {
// 		const data: toBase64Type[] = []
// 		for (let i = 0; i < files.length; i++) {
// 			const file = files[i];
// 			const split = file.name.split('.')
// 			const format = split[split.length - 1]
// 			split.splice(split.length - 1, 1)
// 			const name = split.join('')
// 			data.push(await resolveData({ name, file, format }))
// 		}
// 		resolve(data)
// 	})
// }
FormData.prototype.appendObject = function (obj, except) {
    except = except || [];
    for (const key in obj) {
        if (!except.includes(key))
            this.append(key, obj[key]);
    }
};
Array.prototype.generateEmpty = function (length, fill) {
    const len = new Array(length);
    if (fill !== undefined) {
        return len.fill(fill);
    }
    else {
        if (typeof this[0] === 'string') {
            return Array.from(len, (_, i) => {
                const index = i + 1;
                return index.toAlphabet ? index.toAlphabet() : index.toString();
            });
        }
        else
            return Array.from(len, (_, i) => i + 1);
    }
};
Array.prototype.toRnStyle = function () {
    const styles = this.reduce((styles, style) => {
        const keys = Object.keys(style || {});
        if (keys.includes('0')) {
            return styles = [...styles, ...keys.map((key) => style[key], {})];
        }
        else {
            styles.push(style);
        }
        return styles;
    }, []);
    return styles;
};
Array.prototype.rMap = function (callback) {
    const arr = this;
    return arr.map(function (data, index) {
        const isLast = index + 1 === arr.length;
        let cb = callback(data, index, isLast);
        if (isValidElement(cb)) {
            cb = cloneElement(cb, { key: index.toString() });
        }
        return cb;
    });
};
Array.prototype.mapSync = function (callBackFunction, reverse, index = 0) {
    const arr = this;
    function retCallback(timeout = 0) {
        setTimeout(function () {
            arr.mapSync(callBackFunction, reverse, index + 1);
        }, timeout);
    }
    function retCallbackReverse(timeout = 0) {
        setTimeout(function () {
            if (index > 0)
                arr.mapSync(callBackFunction, reverse, index);
        }, timeout);
    }
    if (reverse) {
        index = index || arr.length;
        index--;
        callBackFunction({ callBack: retCallbackReverse, data: arr[index], index });
    }
    else {
        index = index || 0;
        if (index < arr.length) {
            callBackFunction({ callBack: retCallback, data: arr[index], index });
        }
    }
};
Number.prototype.humanFileSize = function (si = false, dp = 1) {
    let bytes = this;
    const thresh = si ? 1000 : 1024;
    if (Math.abs(bytes) < thresh)
        return bytes + ' B';
    const units = si
        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    let u = -1;
    const r = 10 ** dp;
    do {
        bytes /= thresh;
        ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
    return bytes.toFixed(dp) + ' ' + units[u];
};
Number.prototype.getPercentage = function calculate(total = 0, dp = 2) {
    const current = this;
    return ((total / current) * 100).toFixed(3).toInt();
};
Number.prototype.ratio = function (ratio) {
    ratio = ratio.replace(/\:/g, '/');
    const height = this.toString().extractNumber();
    const width = height * eval(ratio);
    return { height, width };
};
Number.prototype.toAlphabet = function () {
    let s = "", n = this - 1;
    const ordA = 'a'.charCodeAt(0);
    const ordZ = 'z'.charCodeAt(0);
    const len = ordZ - ordA + 1;
    while (n >= 0) {
        s = String.fromCharCode(n % len + ordA) + s;
        n = Math.floor(n / len) - 1;
    }
    return s;
};
Number.prototype.toRoman = function () {
    const roman = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1, };
    let number = this, result = "";
    if (number > 0 && number < 4000) {
        let key;
        for (key in roman) {
            const h = roman[key];
            while (h <= number) {
                result += key;
                number -= h;
            }
        }
        return result;
    }
    else {
        throw new Error("Error. Number should be greater than 0 and less than 4000.");
    }
};
Number.prototype.format = String.prototype.format = function (n = 0, x = 3) {
    const num = this.extractNumber();
    const regex = '\\d(?=(\\d{' + (x) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return num.toFixed(Math.max(0, ~~n)).replace(new RegExp(regex, 'g'), '$&.');
};
Number.prototype.getNearestFifty = function (multiple = 1) {
    const value = this;
    return (Math.floor(value / 50000) + multiple) * 50000;
};
const caseReplacer = (str, separator) => {
    const arr = str.split(separator);
    const capital = arr.map((item, index) => index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item.toLowerCase());
    const toCase = capital.join("");
    return toCase;
};
const caseReplacerFromCamel = function (str, separator) {
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, `$1${separator}$2`).toLowerCase();
};
String.prototype.toMoment = function () {
    const str = this;
    return moment(str);
};
String.prototype.toDigit =
    Number.prototype.toDigit = function (numberOfDigits = 2) {
        let _this = this.toString();
        let number = _this.extractNumber();
        let num = "";
        for (let i = 1; i <= numberOfDigits; i++) {
            num += "0";
        }
        const isMinus = number.extractNumber() >= 0 ? '' : '-';
        number = Math.abs(number);
        return isMinus + (`${num}${number}`).slice(-numberOfDigits);
    };
String.prototype.getPhoneNumber = function () {
    const exp = /^((\+)?62|^0)?/;
    const str = this;
    return str.replace(/(?!\d)./g, '').replace(exp, '');
};
String.prototype.hidePhoneNumber = function () {
    const phonenumber = `0${this?.getPhoneNumber()}`;
    const phoneLength = phonenumber.length;
    const a = phonenumber.substr(0, 2);
    const b = phonenumber.substr(10, phoneLength);
    return a + "********" + b;
};
String.prototype.phoneFormat = function () {
    const phonenumber = `0${this?.getPhoneNumber()}`;
    const segments = phonenumber.match(/.{1,4}/g) ?? [];
    return segments?.join('-');
};
String.prototype.isBase64File = function () {
    try {
        const regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
        return !!this.match(regex);
    }
    catch (error) {
        return false;
    }
};
String.prototype.kebabToCamel = function () {
    const camelCase = caseReplacer(this, '-');
    return camelCase;
};
String.prototype.snakeToCamel = function () {
    const camelCase = caseReplacer(this, '_');
    return camelCase;
};
String.prototype.camelToSnake = function () {
    const snakeCase = caseReplacerFromCamel(this, '_');
    return snakeCase;
};
String.prototype.camelToKebab = function () {
    const kebabCase = caseReplacerFromCamel(this, '-');
    return kebabCase;
};
String.prototype.uuid = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & (0x3 | 0x8));
        return v.toString(16);
    });
};
String.prototype.openUrl = function () {
    const url = this;
    if (url.validURL()) {
        const win = window.open(url, '_blank');
        if (win)
            win.focus();
    }
    else {
        console.log('String is not url');
    }
};
String.prototype.validURL = function () {
    const str = this;
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
};
String.prototype.generateInitial = function () {
    const name = this.split(/\s+/);
    if (this.length === 3) {
        return this.toUpperCase();
    }
    if (name.length > 1) {
        return name[0][0].toUpperCase() + name[1][0].toUpperCase();
    }
    if (this.length === 1) {
        return this[0].toUpperCase();
    }
    return name[0][0].toUpperCase() + name[0][1];
};
String.prototype.ucfirst = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
String.prototype.lcfirst = function () {
    return this.charAt(0).toLowerCase() + this.slice(1);
};
String.prototype.ucwords = function () {
    return this.replace(/\b[a-z]/g, function (letter) {
        return letter.toUpperCase();
    });
};
String.prototype.isBool = function () {
    return this.length < 4 && this.includes("true");
};
String.prototype.convertRupiah = Number.prototype.convertRupiah = function () {
    let str = this.toString();
    if ([undefined, null, ""].includes(str)) {
        str = "0";
    }
    return "Rp. " + parseInt(str).format();
};
String.prototype.extractNumber = Number.prototype.extractNumber = function () {
    const str = this.toString();
    try {
        const matches = str.match(/(-?|-\s+?)\d+/g) || [];
        if (matches.length > 0)
            return matches.join('').replace(/\s/g, '').toInt();
    }
    catch (e) {
        return 0;
    }
    return 0;
};
String.prototype.toInt = function () {
    return Number(this);
};
String.prototype.getRawUrl = function () {
    const str = decodeURI(this);
    const url = str.split("?")[0];
    return url;
};
String.prototype.getParamFromUrl = function () {
    let query = this;
    query = query.substring(query.indexOf('?') + 1);
    const re = /([^&=]+)=?([^&]*)/g;
    const decodeRE = /\+/g;
    const decode = (str) => {
        return decodeURIComponent(str.replace(decodeRE, " "));
    };
    let e;
    const params = {};
    while (e = re.exec(query)) {
        let k = decode(e[1]);
        const v = decode(e[2]);
        if (k.substring(k.length - 2) === '[]') {
            k = k.substring(0, k.length - 2);
            (params[k] || (params[k] = [])).push(v);
        }
        else
            params[k] = v;
    }
    const assign = function (obj, keyPath, value) {
        const lastKeyIndex = keyPath.length - 1;
        for (let i = 0; i < lastKeyIndex; ++i) {
            const key = keyPath[i];
            if (!(key in obj))
                obj[key] = {};
            obj = obj[key];
        }
        obj[keyPath[lastKeyIndex]] = value;
    };
    for (const prop in params) {
        const structure = prop.split('[');
        if (structure.length > 1) {
            const levels = [];
            structure.forEach(function (item) {
                const key = item.replace(/[?[\]\\ ]/g, '');
                levels.push(key);
            });
            assign(params, levels, params[prop]);
            delete (params[prop]);
        }
    }
    return params;
};
Math.randomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
Object.toQueryParams = function (obj) {
    const ret = [];
    for (const key in obj)
        ret.push(`${key}=${obj[key]}`);
    return ret.join('&');
};
