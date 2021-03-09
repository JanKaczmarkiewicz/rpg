import { Router } from 'express';

import deleteMap from './deleteMap';
import getMap from './getMap';
import createMap from './createMap';
import updateMap from './updateMap';
import getMaps from './getMaps';

const router = Router();

router.get('/', getMaps.validators, getMaps.handler);
router.get('/:id', getMap.validators, getMap.handler);
router.post('/', createMap.validators, createMap.handler);
router.delete('/:id', deleteMap.validators, deleteMap.handler);
router.patch('/:id', updateMap.validators, updateMap.handler);

export default router;
