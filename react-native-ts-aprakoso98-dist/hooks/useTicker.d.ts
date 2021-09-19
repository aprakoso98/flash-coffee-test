declare const useTicker: (initial?: number, time?: number) => [number, {
    paused: boolean;
    playPause: (set?: boolean | undefined) => void;
} & Record<"play" | "pause" | "reset", () => void>];
export default useTicker;
