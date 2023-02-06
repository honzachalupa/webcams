import cx from "classnames";
import { useState } from "react";
// @ts-ignore
import { config } from "../../config";
import { ISource, sources } from "../data/sources";
import { useSourcesUpdate } from "../hooks/useSourcesUpdate";
import { LayoutPrimary as Layout } from "../layouts/Primary";

const Source: React.FC<ISource> = ({
    location,
    view,
    url,
    type,
    isFeatured,
}) => {
    const [isFullscreen, setIsFullscreen] = useState<boolean>();

    return (
        <article
            className={cx("cursor-pointer", {
                "basis-full": isFeatured,
                "basis-[calc(50%-10px)]": !isFeatured,
                "fixed top-0 left-0 flex h-screen w-screen items-center bg-black":
                    isFullscreen,
            })}
            onClick={() => setIsFullscreen(true)}
        >
            <div>
                <p className="m-2 text-xs">
                    {location} {view && <span>({view})</span>}
                </p>

                {type === "iframe" ? (
                    <iframe src={url} className="aspect-video w-full" />
                ) : type === "image" ? (
                    <img
                        src={url}
                        alt={location}
                        className="aspect-video w-full object-cover"
                    />
                ) : null}

                {isFullscreen && (
                    <button
                        className="bg-gray-500"
                        onClick={() => setIsFullscreen(false)}
                    >
                        Kliknutím zavřete
                    </button>
                )}
            </div>
        </article>
    );
};

export default function Index() {
    const { updateKey, updatedAt } = useSourcesUpdate();

    return (
        <Layout>
            <h1 className="hidden">{config.appName}</h1>

            <section key={updateKey} className="flex flex-wrap gap-[20px]">
                {sources.map((source) => (
                    <Source
                        key={source.location + source.view || ""}
                        {...source}
                    />
                ))}

                <p className="m-5 w-full text-center text-xs">
                    Aktualizováno: {updatedAt?.format("H:mm:ss")}
                </p>
            </section>
        </Layout>
    );
}
