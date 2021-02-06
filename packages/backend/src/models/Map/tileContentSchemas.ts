import { Schema } from 'mongoose';
import { Model, ContentKind } from '../../constants/constants';

const tileContentSchemas = {
    [ContentKind.Enemy]: new Schema(
        { enemy: { type: Schema.Types.ObjectId, ref: Model.Enemy, required: true } },
        { _id: false },
    ),
    [ContentKind.Npc]: new Schema(
        { npc: { type: Schema.Types.ObjectId, ref: Model.Npc, required: true } },
        { _id: false },
    ),
    [ContentKind.Wall]: new Schema({}, { _id: false }),
};

export default tileContentSchemas;
