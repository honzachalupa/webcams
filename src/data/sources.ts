export interface ISource {
    id: number;
    location: string;
    view?: string;
    url: string;
    type: "image" | "video" | "stream" | "iframe";
    isFeatured?: boolean;
}

export const sources: ISource[] = [
    {
        id: 1,
        location: "Panorama",
        url: "https://www.holidayinfo.cz//hol3_data.php?type=camvideo&ext=mp4&camid=2127&cdt=20230206152144&dt=20230206151029",
        type: "video",
        isFeatured: true,
    },
    /* {
        id: 2,
        location: "Staroměstské náměstí",
        url: "https://v.angelcam.com/iframe?v=b91yx13loj&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkb21haW4iOiJob3RlbC1saXBwZXJ0LmNsaWNrMnN0cmVhbS5jb20iLCJjYW1lcmFfaWQiOjMyMiwiZXhwIjoxNjc1NzEyMDExfQ.ThURHkLFECrRvw-1tXnzFe9_xP33C-oOu91RMJX6Ef0&autoplay=1",
        type: "iframe",
    }, */
    {
        id: 3,
        location: "Karlův most",
        view: "Pražský hrad",
        url: "https://webcam.csvts.cz/webcam-karluv-most.jpeg",
        type: "image",
    },
    {
        id: 4,
        location: "Náměstí Míru",
        view: "kostel svaté Ludmily",
        url: "https://www.hydronet.cz/mirak-1/now.jpg",
        type: "image",
    },
    {
        id: 5,
        location: "Náměstí Míru",
        view: "Pražský hrad",
        url: "https://www.hydronet.cz/mirak-2/now.jpg",
        type: "image",
    },
    {
        id: 6,
        location: "Václavské náměstí",
        url: "https://www.worldcamera.net/kamera/webcam_prague_vaclav.jpg?dummy=1675692874492",
        type: "image",
    },
    {
        id: 7,
        location: "Libuš",
        view: "sever",
        url: "https://www.chmi.cz/files/portal/docs/meteo/kam/praha_libus2.jpg",
        type: "image",
    },
    {
        id: 8,
        location: "Libuš",
        view: "jih",
        url: "https://www.chmi.cz/files/portal/docs/meteo/kam/praha_libus.jpg",
        type: "image",
    },
    {
        id: 9,
        location: "Hlavní nádraží",
        url: "https://vwrjffrka3.gjirafa.net/live/motZvUmyIk9PCPXEf5gwAB1GmIlQTn6b/t0g0qq-retina.jpg",
        type: "image",
    },
    {
        id: 10,
        location: "Letiště Václava Havla",
        url: "https://vwrjffrka3.gjirafa.net/live/V5VHPPcRRtIuWFdnDuwjefzSqTKyBrW3/t0110x-retina.jpg",
        type: "image",
    },
    {
        id: 11,
        location: "Letiště Václava Havla",
        url: "https://vwrjffrka3.gjirafa.net/live/motZvUmyIk9PCPXEf5gwAB1GmIlQTn6b/t0g0gg-retina.jpg",
        type: "image",
    },
];
