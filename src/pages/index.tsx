import cx from "classnames";
import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { config } from "../../config";
import { SourceActions } from "../actions/sources";
import { SourceMedia } from "../components/SourceMedia";
import { UpdateTimestamp } from "../components/UpdateTimestamp";
import { Layout } from "../layouts/Main";

export default function Index({
    sources,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter();

    return (
        <Layout>
            <h1 className="hidden">{config.appName}</h1>

            <section className="m-3 flex flex-wrap gap-[10px]">
                {sources.map((source) => (
                    <article
                        key={source.id}
                        className={cx({
                            "mx-[-10px] basis-[calc(100%+20px)]":
                                source.isFeatured,
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
                                {source.location}
                            </p>

                            <SourceMedia
                                url={source.url}
                                type={source.type}
                                className={cx({
                                    "rounded-md": !source.isFeatured,
                                })}
                            />
                        </div>
                    </article>
                ))}
            </section>

            <UpdateTimestamp />
        </Layout>
    );
}

export const getServerSideProps = async () => ({
    props: {
        sources: await SourceActions.find(),
    },
});
