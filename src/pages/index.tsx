import cx from "classnames";
import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { config } from "../../config";
import { SourceActions } from "../actions/sources";
import { SourceMedia } from "../components/SourceMedia";
import { UpdateTimestamp } from "../components/UpdateTimestamp";
import { useSourcesUpdate } from "../hooks/useSourcesUpdate";
import { ISource } from "../types/source";

const Source: React.FC<ISource> = (source) => {
    const router = useRouter();

    return (
        <article
            className={cx({
                "mx-[-10px] basis-[calc(100%+20px)]": source.isFeatured,
                "basis-[calc(50%-5px)]": !source.isFeatured,
            })}
            onClick={() =>
                router.push({
                    pathname: "/detail",
                    query: { sourceId: source.id },
                })
            }
        >
            <div className="flex h-full flex-col justify-between">
                <p
                    className={cx("my-1 text-xs", {
                        "mx-2": source.isFeatured,
                    })}
                >
                    {source.location}{" "}
                    {source.view && <span>({source.view})</span>}
                </p>

                <SourceMedia
                    source={source}
                    className={cx({
                        "rounded-md": !source.isFeatured,
                    })}
                />
            </div>
        </article>
    );
};

export default function Index({
    sources,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const update = useSourcesUpdate();

    return (
        <>
            <Head>
                <title>Webové kamery</title>
            </Head>

            <h1 className="hidden">{config.appName}</h1>

            <section className="m-3 flex flex-wrap gap-[10px]">
                {sources.map((source) => (
                    <Source key={source.id} {...source} />
                ))}
            </section>

            <UpdateTimestamp />
        </>
    );
}

export const getServerSideProps = async () => ({
    props: {
        sources: await SourceActions.find(),
    },
});
