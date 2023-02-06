import flowplayer from "@flowplayer/player";
// @ts-ignore
import HLSPlugin from "@flowplayer/player/plugins/hls";
// @ts-ignore
import { default as Player, useFlowplayer } from "@flowplayer/react-flowplayer";
import { useEffect, useRef } from "react";
import { ISource } from "../data/sources";

flowplayer(HLSPlugin);

interface IProps {
    url: ISource["url"];
}

export const FlowPlayer: React.FC<IProps> = ({ url }) => {
    const ref = useRef();
    const video = useFlowplayer(ref);

    useEffect(() => {
        if (!video) return;

        video.play();
    }, [video]);

    return <Player ref={ref} src={url} live autoPlay autoplay />;
};
