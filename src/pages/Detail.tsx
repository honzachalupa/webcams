import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FlowPlayer } from "../components/FlowPlayer";
import { ISource, sources } from "../data/sources";
import { useSourcesUpdate } from "../hooks/useSourcesUpdate";

export const DetailPage: React.FC = () => {
    const navigate = useNavigate();
    const { sourceId } = useParams<{ sourceId: string }>();
    const update = useSourcesUpdate();

    const [source, setSource] = useState<ISource>();

    const handleGoBack = () => {
        navigate("/");
    };

    useEffect(() => {
        const source = sources.find(({ id }) => id === Number(sourceId));

        if (!source) {
            navigate("/");
        }

        setSource(source);
    }, [navigate, sourceId]);

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
                            title={source.location}
                            className="aspect-video w-full"
                        />
                    ) : source.type === "video" ? (
                        <video
                            key={update.key}
                            src={source.url}
                            className="aspect-video w-full"
                            autoPlay
                            muted
                        />
                    ) : source.type === "stream" ? (
                        <FlowPlayer
                            url={source.url}
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
};
