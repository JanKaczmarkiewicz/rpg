import { Router } from 'express';
import { ResponseStatus } from '../constants/constants';
import { validateMapsPostBody } from './validators';

const mapsRouter = Router();

mapsRouter.post('/', validateMapsPostBody, async (req, res) => {
    const { Map } = req.context.models;
    const newMap = req.body;

    const doc = await new Map(newMap).save();

    res.status(ResponseStatus.Success).json(doc);
});

mapsRouter.get('/', async (req, res) => {
    const { Map } = req.context.models;

    const maps = await Map.find();

    res.status(ResponseStatus.Success).json(maps);
});

mapsRouter.get<{ id: string }>('/:id', async (req, res) => {
    const { Map } = req.context.models;
    const { id } = req.params;

    const map = await Map.findById(id);

    if (!map) return res.status(ResponseStatus.NotFound).json({ message: 'not found' });

    res.status(ResponseStatus.Success).json(map);
});

export default mapsRouter;
