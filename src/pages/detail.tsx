import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
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
                <title>{source.location} | Webové kamery</title>
            </Head>

            <button onClick={handleGoBack} className="m-2 flex items-center">
                <ChevronLeftIcon className="h-5" />
                <span>Zpět</span>
            </button>

            <section>
                <div>
                    <p className="m-2 text-xs">
                        {source.location}{" "}
                        {source.view && <span>({source.view})</span>}
                    </p>

                    <SourceMedia source={source} />
                </div>
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
