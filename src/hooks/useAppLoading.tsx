import { Router } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader";

export const useAppLoading = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const start = () => {
            setIsLoading(true);
        };

        const end = () => {
            setIsLoading(false);
        };

        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);

        return () => {
            Router.events.off("routeChangeStart", start);
            Router.events.off("routeChangeComplete", end);
            Router.events.off("routeChangeError", end);
        };
    }, []);

    return {
        isLoading,
        Loader: isLoading ? () => <Loader /> : () => null,
    };
};
