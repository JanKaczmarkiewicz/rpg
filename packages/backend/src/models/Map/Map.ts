import { Schema, model, Document } from 'mongoose';
import tileContentSchemas from './tileContentSchemas';
import { ContentKind, CONTENT_DISCRIMINATION_KEY, Model } from '../../constants/constants';
import Enemy from '../Enemy/Enemy';

type Content =
    | { kind: ContentKind.Enemy; enemy: string }
    | { kind: ContentKind.Wall }
    | { kind: ContentKind.Empty }
    | { kind: ContentKind.Npc };

export interface MapDbObject extends Document {
    backgroundUrl: string;
    tiles: Content[][];
    name: string;
}

const mapSchema = new Schema<MapDbObject>({
    backgroundUrl: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    tiles: [[new Schema({}, { discriminatorKey: CONTENT_DISCRIMINATION_KEY, _id: false })]],
});

const populateMap = async (doc: MapDbObject) => {
    for (const row of doc.tiles)
        for (const doc of row) {
            const tile = (doc as any)._doc;

            switch (tile.kind) {
                case ContentKind.Enemy:
                    tile.enemy = (await Enemy.findById(tile.enemy))!;
                    return;
            }
        }
};

mapSchema
    .post('find', (docs) => Promise.all(docs.map(populateMap)))
    .post('findOne', populateMap)
    .post('findOneAndUpdate', populateMap)
    .post('save', populateMap);

const contentPath = mapSchema.path('tiles.$') as Schema.Types.Array;

Object.entries(tileContentSchemas).forEach(([key, schema]) => contentPath.discriminator(key, schema));

export default model(Model.Map, mapSchema);
