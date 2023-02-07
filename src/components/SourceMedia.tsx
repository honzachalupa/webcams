import cx from "classnames";
import { useSourcesUpdate } from "../hooks/useSourcesUpdate";
import { ISource } from "../types/source";

interface IProps {
    url: ISource["url"];
    type: ISource["type"];
    className?: string;
}

export const SourceMedia: React.FC<IProps> = ({ url, type, className }) => {
    const update = useSourcesUpdate();

    const sharedProps = {
        key: update.key,
        src: url,
        className: cx("aspect-video w-full object-cover", className),
    };

    return type === "iframe" ? (
        <iframe {...sharedProps} />
    ) : type === "video" ? (
        <video {...sharedProps} autoPlay muted />
    ) : type === "image" ? (
        <img {...sharedProps} alt="Webovou kameru se nepodařilo načíst" />
    ) : null;
};
