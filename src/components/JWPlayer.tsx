import dynamic from "next/dynamic";
import { useEffect } from "react";
import { ISource } from "../data/sources";

// @ts-ignore
const Player = dynamic(() => import("@jwplayer/jwplayer-react"), {
    ssr: false,
});

interface IProps {
    url: ISource["url"];
}

// @ts-ignore
jwplayer.key = "ufAYZci9bX9QeujQnw+8aThpKPIb/eqCAx3DfdrGGrQ=";

export const JWPlayer: React.FC<IProps> = ({ url }) => {
    useEffect(() => {
        console.log("window.innerHeight", window.innerHeight);
    }, []);

    return (
        <Player
            // @ts-ignore
            library="https://www.zoopraha.cz/jwplayer/jwplayer.js"
            playlist={url}
        />
    );
};
