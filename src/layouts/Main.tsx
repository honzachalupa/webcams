import Head from "next/head";
import { ReactNode } from "react";
import { config } from "../../config";
import { useAppLoading } from "../hooks/useAppLoading";

interface IProps {
    title?: string;
    children: ReactNode;
}

export const Layout: React.FC<IProps> = ({ title, children }) => {
    const { Loader } = useAppLoading();

    return (
        <>
            <Head>
                <title>
                    {[config.appName, title].filter(Boolean).join(" | ")}
                </title>
            </Head>

            {children}

            <Loader />
        </>
    );
};
