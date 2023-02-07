import { MongoClient } from "mongodb";

// @ts-ignore
export const sourcesCollection = new MongoClient(process.env.MONGODB_URL)
    .db("webcams")
    .collection("sources");
