import { EnemyDbObject } from '../../../models/Enemy/Enemy';
import { EnemyObjectResponse } from './types';

export const sanitizeEnemy = (doc: EnemyDbObject): EnemyObjectResponse => ({
    id: doc.id,
    name: doc.name,
    description: doc.description,
    level: doc.level,
    imageUrl: doc.imageUrl,
});
