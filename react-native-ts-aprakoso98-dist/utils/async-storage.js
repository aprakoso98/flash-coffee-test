import StorageAsync from "@react-native-async-storage/async-storage";
export const AsyncStorage = {
    ...StorageAsync,
    async getItem(key) {
        const item = await StorageAsync.getItem(key);
        try {
            if (['true', 'false'].includes(item)) {
                return (item === 'true' ? true : false);
            }
            return JSON.parse(item);
        }
        catch (err) {
            return item;
        }
    },
    async getItems(keys) {
        let ret = {};
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            ret[key] = await this.getItem(key);
        }
        return ret;
    },
    async setItems(items) {
        let ret = {};
        for (const key in items) {
            ret[key] = await this.setItem(key, items[key]);
        }
        return ret;
    },
    setItem(key, value) {
        if (typeof value === 'object') {
            return StorageAsync.setItem(key, JSON.stringify(value));
        }
        else {
            if (typeof value === 'boolean') {
                value = value ? 'true' : 'false';
            }
            return StorageAsync.setItem(key, value);
        }
    },
};
