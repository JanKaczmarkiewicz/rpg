import { Router } from 'express';
import createEnemy, { validateCreateEnemyBody } from './createEnemy';
import deleteEnemy, { validateDeleteEnemyParams } from './deleteEnemy';
import getEnemies from './getEnemies';
import getEnemy, { validateGetEnemyParams } from './getEnemy';

const router = Router();

router.get('/', getEnemies);
router.get('/:id', validateGetEnemyParams, getEnemy);
router.post('/', validateCreateEnemyBody, createEnemy);
router.delete('/:id', validateDeleteEnemyParams, deleteEnemy);

export default router;
