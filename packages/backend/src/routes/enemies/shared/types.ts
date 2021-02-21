import { EnemyDbObject } from '../../../models/Enemy/Enemy';

export type EnemyObjectResponse = Pick<EnemyDbObject, 'id' | 'level' | 'description' | 'name' | 'imageUrl'>;
