import cx from "classnames";
// @ts-ignore
import { config } from "../../config";
import { useSourcesUpdate } from "../hooks/useSourcesUpdate";
import { LayoutPrimary as Layout } from "../layouts/Primary";
import { ISource, sources } from "./index.data";

const Source: React.FC<ISource> = ({
    location,
    view,
    url,
    type,
    isFeatured,
}) => {
    return (
        <article
            className={cx({
                "basis-full": isFeatured,
                "basis-[calc(50%-10px)]": !isFeatured,
            })}
        >
            <p>
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
