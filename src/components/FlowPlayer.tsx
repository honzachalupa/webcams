import flowplayer from "@flowplayer/player";
// @ts-ignore
import HLSPlugin from "@flowplayer/player/plugins/hls";
// @ts-ignore
import { default as Flow, useFlowplayer } from "@flowplayer/react-flowplayer";
import cx from "classnames";
import { useEffect, useRef } from "react";

flowplayer(HLSPlugin);

interface IProps {
    url: string;
    className?: string;
}

export const FlowPlayer: React.FC<IProps> = ({ url, className }) => {
    const ref = useRef();
    const video = useFlowplayer(ref);

    useEffect(() => {
        // video?.play();
    }, [video]);

    return (
        <div className={cx(className, "[&>*>video]:w-full")}>
            <Flow ref={ref} src={url} />
        </div>
    );
};
