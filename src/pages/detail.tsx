import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ISource, sources } from "../data/sources";
import { useSourcesUpdate } from "../hooks/useSourcesUpdate";

export default function Detail() {
    const router = useRouter() as NextRouter & { query: { sourceId: string } };
    const update = useSourcesUpdate();

    const [source, setSource] = useState<ISource>();

    const handleGoBack = () => {
        router.push("/");
    };

    useEffect(() => {
        const source = sources.find(
            ({ id }) => id === Number(router.query.sourceId)
        );

        if (!source) {
            router.replace("/");
        }

        setSource(source);
    }, [router]);

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
                Aktualizováno: {update.timestamp?.format("H:mm:ss")}
            </p>
        </section>
    ) : null;
}
