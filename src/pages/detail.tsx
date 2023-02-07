import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
import { config } from "../../config";
import { SourceActions } from "../actions/sources";
import { SourceMedia } from "../components/SourceMedia";
import { UpdateTimestamp } from "../components/UpdateTimestamp";
import { ISource } from "../types/source";

export default function Detail({
    source,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter() as NextRouter & {
        query: { sourceId: ISource["id"] };
    };

    const handleGoBack = () => {
        router.push("/");
    };

    return (
        <>
            <Head>
                <title>
                    {source.location} | {config.appName}
                </title>
            </Head>

            <button onClick={handleGoBack} className="m-2 flex items-center">
                <ChevronLeftIcon className="h-5" />
                <span>Zpět</span>
            </button>

            <section className="mt-5">
                <SourceMedia url={source.url} type={source.type} />

                <ul className="m-2 text-center text-xs">
                    <li>Lokalita: {source.location}</li>
                    {source.view && <li>Pohled: {source.view}</li>}
                </ul>
            </section>

            <UpdateTimestamp />
        </>
    );
}

export const getServerSideProps = async ({
    query,
}: {
    query: { sourceId: ISource["id"] };
}) => ({
    props: {
        source: await SourceActions.findOne({ id: query.sourceId }),
    },
});
