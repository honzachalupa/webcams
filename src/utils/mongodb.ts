import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URL not provided.");
}

export const sourcesCollection = new MongoClient(process.env.MONGODB_URL)
    .db("webcams")
    .collection("sources");
