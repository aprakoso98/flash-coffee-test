import { useEffect } from "react";
const useDebounce = (callback, dep) => {
    useEffect(() => {
        const timeout = setTimeout(callback, 500);
        return () => clearTimeout(timeout);
    }, dep ?? []);
};
export default useDebounce;
