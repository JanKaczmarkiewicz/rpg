import { EnemyDbObject } from '../../../models/Enemy/Enemy';

export type EnemyObjectResponse = Required<Pick<EnemyDbObject, 'id' | 'level' | 'description' | 'name' | 'imageUrl'>>;
