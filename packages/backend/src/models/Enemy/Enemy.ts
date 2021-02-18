import { Model } from '../../constants/constants';
import { Schema, model, Document } from 'mongoose';

export interface EnemyDbObject extends Document {
    name: string;
    imageUrl: string;
    level: number;
    description: string;
}

const enemySchema = new Schema<EnemyDbObject>({
    name: {
        required: true,
        type: String,
    },
    imageUrl: {
        required: true,
        type: String,
    },
    description: {
        required: true,
        type: String,
    },
    level: {
        required: true,
        type: Number,
    },
});

export default model(Model.Enemy, enemySchema);
