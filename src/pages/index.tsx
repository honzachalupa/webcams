import cx from "classnames";
import { useRouter } from "next/router";
import { config } from "../../config";
import { JWPlayer } from "../components/JWPlayer";
import { ISource, sources } from "../data/sources";
import { useSourcesUpdate } from "../hooks/useSourcesUpdate";

const Source: React.FC<ISource> = (source) => {
    const router = useRouter();
    const update = useSourcesUpdate();

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
                <p className="my-1 text-xs">
                    {source.location}{" "}
                    {source.view && <span>({source.view})</span>}
                </p>

                {source.type === "iframe" ? (
                    <iframe
                        key={update.key}
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
                    <JWPlayer url={source.url} />
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

export default function Index() {
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
}
