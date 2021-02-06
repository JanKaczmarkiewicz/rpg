import { Schema, model, Document } from 'mongoose';
import tileContentSchemas from './tileContentSchemas';
import { ContentKind, CONTENT_DISCRIMINATION_KEY, Model } from '../../constants/constants';

const contentSchema = new Schema({}, { discriminatorKey: CONTENT_DISCRIMINATION_KEY, _id: false });

type Content = {
    kind: ContentKind;
};

interface MapDbObject extends Document {
    backgroundUrl: string;
    tiles: Content[][];
}

const mapSchema = new Schema<MapDbObject>({
    backgroundUrl: {
        type: String,
        required: true,
    },
    tiles: [[contentSchema]],
});

const contentPath = mapSchema.path('tiles') as Schema.Types.Array;

Object.entries(tileContentSchemas).forEach(([key, schema]) => contentPath.discriminator(key, schema));

export default model(Model.Map, mapSchema);
