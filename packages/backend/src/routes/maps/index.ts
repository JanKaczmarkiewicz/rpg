import { Router } from 'express';
import deleteMap, { validateDeleteMapParams } from './deleteMap';
import getMap, { validateGetMapParams } from './getMap';
import createMap, { validateCreateMapBody } from './createMap';
import getMaps from './getMaps';

const router = Router();

router.get('/', getMaps);
router.get('/:id', validateGetMapParams, getMap);
router.post('/', validateCreateMapBody, createMap);
router.delete('/:id', validateDeleteMapParams, deleteMap);

export default router;
