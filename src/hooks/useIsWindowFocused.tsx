import { useEffect, useState } from "react";

export const useIsWindowFocused = () => {
    const [isFocused, setIsFocused] = useState<boolean>(true);

    const onFocus = () => setIsFocused(true);
    const onBlur = () => setIsFocused(false);

    useEffect(() => {
        window.addEventListener("focus", onFocus);
        window.addEventListener("blur", onBlur);

        onFocus();

        return () => {
            window.removeEventListener("focus", onFocus);
            window.removeEventListener("blur", onBlur);
        };
    }, []);

    return isFocused;
};
