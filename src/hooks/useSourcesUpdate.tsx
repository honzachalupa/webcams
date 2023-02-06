import moment, { Moment } from "moment";
import { useEffect, useState } from "react";
import { useIsWindowFocused } from "./useIsWindowFocused";

export const useSourcesUpdate = () => {
    const isWindowFocused = useIsWindowFocused();

    const [state, setState] = useState<{
        key: number;
        timestamp: Moment;
    }>({
        key: 0,
        timestamp: moment(),
    });

    const update = () => {
        setState({
            key: Math.random(),
            timestamp: moment(),
        });
    };

    useEffect(() => {
        const minutes = 2;

        const interval = setInterval(() => {
            update();
        }, minutes * 60 * 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        if (isWindowFocused) {
            update();
        }
    }, [isWindowFocused]);

    return state;
};
