import cx from "classnames";
import { useSourcesUpdate } from "../hooks/useSourcesUpdate";
import { ISource } from "../types/source";

interface IProps {
    source: ISource;
    className?: string;
}

export const SourceMedia: React.FC<IProps> = ({ source, className }) => {
    const update = useSourcesUpdate();

    const sharedProps = {
        key: update.key,
        src: source.url,
        className: cx("aspect-video w-full object-cover", className),
    };

    return source.type === "iframe" ? (
        <iframe {...sharedProps} />
    ) : source.type === "video" ? (
        <video {...sharedProps} autoPlay muted />
    ) : source.type === "image" ? (
        <img {...sharedProps} alt="Webovou kameru se nepodařilo načíst" />
    ) : null;
};
