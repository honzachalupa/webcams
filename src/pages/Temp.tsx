import cx from "classnames";
import { useNavigate } from "react-router-dom";
import { FlowPlayer } from "../components/FlowPlayer";
import { config } from "../config";
import { ISource, sources } from "../data/sources";
import { useSourcesUpdate } from "../hooks/useSourcesUpdate";

const Source: React.FC<ISource> = (source) => {
    const navigate = useNavigate();
    const update = useSourcesUpdate();

    return (
        <article
            className={cx("cursor-pointer", {
                "mx-[-10px] basis-[calc(100%+20px)]": source.isFeatured,
                "basis-[calc(50%-5px)]": !source.isFeatured,
            })}
            onClick={() => navigate(`/detail/${source.id}`)}
        >
            <div className="flex h-full flex-col justify-between">
                <p className="my-1 text-xs">
                    {source.location}{" "}
                    {source.view && <span>({source.view})</span>}
                </p>

                {source.type === "iframe" ? (
                    <iframe
                        key={update.key}
                        title={source.location}
                        src={source.url}
                        className={cx("aspect-video w-full", {
                            "rounded-sm": !source.isFeatured,
                        })}
                    />
                ) : source.type === "video" ? (
                    <video
                        key={update.key}
                        src={source.url}
                        className={cx("aspect-video w-full", {
                            "rounded-sm": !source.isFeatured,
                        })}
                        autoPlay
                        muted
                    />
                ) : source.type === "stream" ? (
                    <FlowPlayer
                        url={source.url}
                        className={cx("aspect-video w-full", {
                            "rounded-sm": !source.isFeatured,
                        })}
                    />
                ) : source.type === "image" ? (
                    <img
                        key={update.key}
                        src={source.url}
                        alt="Webovou kameru se nepodařilo načíst"
                        className={cx("aspect-video w-full object-cover", {
                            "rounded-sm": !source.isFeatured,
                        })}
                    />
                ) : null}
            </div>
        </article>
    );
};

export const IndexPage: React.FC = () => {
    const update = useSourcesUpdate();

    return (
        <>
            <h1 className="hidden">{config.appName}</h1>

            <section className="m-3 flex flex-wrap gap-[10px]">
                {sources.map((source) => (
                    <Source key={source.id} {...source} />
                ))}

                <p className="m-[5px] w-full text-center text-xs">
                    Aktualizováno: {update.timestamp?.format("H:mm:ss")}
                </p>
            </section>
        </>
    );
};
