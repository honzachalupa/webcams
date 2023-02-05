import cx from "classnames";
import { config } from "../../config";
import { LayoutPrimary as Layout } from "../layouts/Primary";

interface ISource {
    location: string;
    view?: string;
    url: string;
    type: "image" | "video" | "iframe";
    isFeatured?: boolean;
}

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
    const sources: ISource[] = [
        {
            location: "Staroměstské náměstí",
            url: "https://v.angelcam.com/iframe?v=b91yx13loj&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkb21haW4iOiJob3RlbC1saXBwZXJ0LmNsaWNrMnN0cmVhbS5jb20iLCJjYW1lcmFfaWQiOjMyMiwiZXhwIjoxNjc1NzEyMDExfQ.ThURHkLFECrRvw-1tXnzFe9_xP33C-oOu91RMJX6Ef0&autoplay=1",
            type: "iframe",
            isFeatured: true,
        },
        {
            location: "Karlův most",
            view: "pohled na Pražský hrad",
            url: "https://webcam.csvts.cz/webcam-karluv-most.jpeg",
            type: "image",
        },
        {
            location: "Náměstí Míru",
            view: "pohled na Baziliku svaté Ludmily",
            url: "https://www.hydronet.cz/mirak-1/now.jpg",
            type: "image",
        },
        {
            location: "Náměstí Míru",
            view: "pohled na Pražský hrad",
            url: "https://www.hydronet.cz/mirak-2/now.jpg",
            type: "image",
        },
        {
            location: "Václavské náměstí",
            url: "https://www.praguecamera.net/kamera_vaclav.php",
            type: "iframe",
        },
        {
            location: "Libuš",
            view: "pohled na sever",
            url: "https://www.chmi.cz/files/portal/docs/meteo/kam/praha_libus2.jpg",
            type: "image",
        },
        {
            location: "Libuš",
            view: "pohled na jih",
            url: "https://www.chmi.cz/files/portal/docs/meteo/kam/praha_libus.jpg",
            type: "image",
        },
    ];

    return (
        <Layout>
            <h1 className="hidden">{config.appName}</h1>

            <section className="flex flex-wrap gap-[20px]">
                {sources.map((source) => (
                    <Source
                        key={source.location + source.view || ""}
                        {...source}
                    />
                ))}
            </section>
        </Layout>
    );
}
