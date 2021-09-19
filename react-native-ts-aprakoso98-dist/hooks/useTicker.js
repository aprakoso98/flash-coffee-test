import { useEffect, useState } from "react";
const useTicker = (initial = 0, time = 1000) => {
    const [paused, setPaused] = useState(false);
    const [tick, setTicker] = useState(initial);
    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused)
                setTicker(tick + 1);
        }, time);
        return () => clearInterval(interval);
    }, [tick, paused]);
    return [
        tick, {
            paused,
            playPause: (set) => {
                if (typeof set === 'boolean') {
                    setPaused(!set);
                }
                else {
                    setPaused(!paused);
                }
            },
            play: () => setPaused(false),
            pause: () => setPaused(true),
            reset: () => setTicker(initial)
        }
    ];
};
export default useTicker;
