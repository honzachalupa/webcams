import moment, { Moment } from "moment";
import { useEffect, useState } from "react";
import { useIsWindowFocused } from "./useIsWindowFocused";

export const useSourcesUpdate = () => {
    const isWindowFocused = useIsWindowFocused();

    const [updateKey, setUpdateKey] = useState<number>(0);
    const [updatedAt, setUpdatedAt] = useState<Moment>();

    useEffect(() => {
        if (isWindowFocused) {
            setUpdateKey(Math.random());
            setUpdatedAt(moment());
        }
    }, [isWindowFocused]);

    return {
        updateKey,
        updatedAt,
    };
};
