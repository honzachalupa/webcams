import moment from "moment";
import { ObjectId } from "mongodb";
import { ISource } from "../types/source";
import { sourcesCollection } from "../utils/mongodb";

const fillUrlTimestamp = (url: ISource["url"]) =>
    url.replace(/{timestamp}/g, moment().format("YYYYMMDDHHmmss"));

const find = () =>
    sourcesCollection
        .find()
        .map(
            ({ _id, url, ...item }) =>
                ({
                    id: _id.toString(),
                    url: fillUrlTimestamp(url),
                    ...(item as any),
                } as ISource)
        )
        .toArray();

const findOne = ({ id }: { id: ISource["id"] }) =>
    sourcesCollection
        .findOne({
            _id: new ObjectId(id),
        })
        .then(
            ({ _id, url, ...item }: any) =>
                ({
                    id: _id.toString(),
                    url: fillUrlTimestamp(url),
                    ...item,
                } as ISource)
        );

export const SourceActions = {
    find,
    findOne,
};
