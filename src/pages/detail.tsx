import { InferGetServerSidePropsType } from "next";
import { NextRouter, useRouter } from "next/router";
import { SourceActions } from "../actions/sources";
import { useSourcesUpdate } from "../hooks/useSourcesUpdate";
import { ISource } from "../types/source";

export default function Detail({
    source,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter() as NextRouter & {
        query: { sourceId: ISource["id"] };
    };
    const update = useSourcesUpdate();

    const handleGoBack = () => {
        router.push("/");
    };

    return source ? (
        <section>
            <h1 className="hidden">{source.location}</h1>

            <button onClick={handleGoBack}>Zpět</button>

            <article>
                <div>
                    <p className="m-2 text-xs">
                        {source.location}{" "}
                        {source.view && <span>({source.view})</span>}
                    </p>

                    {source.type === "iframe" ? (
                        <iframe
                            key={update.key}
                            src={source.url}
                            className="aspect-video w-full"
                        />
                    ) : source.type === "image" ? (
                        <img
                            key={update.key}
                            src={source.url}
                            alt={source.location}
                            className="aspect-video w-full object-cover"
                        />
                    ) : null}
                </div>
            </article>

            <p className="m-5 w-full text-center text-xs">
                Aktualizováno: {update.timestamp?.format("H:mm")}
            </p>
        </section>
    ) : null;
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
