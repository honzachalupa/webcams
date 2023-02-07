export interface ISource {
    id: number;
    location: string;
    view?: string;
    url: string;
    type: "image" | "video" | "iframe"; // "stream"
    isFeatured?: boolean;
}
