import { Router } from 'express';
import { ResponseStatus } from '../constants/constants';
import { MapDbObject } from '../models/Map/Map';
import { validateMapsPostBody } from './validators';

const mapsRouter = Router();

const sanitizeMap = (doc: MapDbObject) => ({
    id: doc.id,
    backgroundUrl: doc.backgroundUrl,
    tiles: doc.tiles,
});

mapsRouter.post('/', validateMapsPostBody, async (req, res) => {
    const { Map } = req.context.models;
    const newMap = req.body;

    try {
        const doc = await new Map(newMap).save();

        return res.status(ResponseStatus.Created).json(sanitizeMap(doc));
    } catch (error) {
        return res.status(ResponseStatus.BadRequest).json({ message: 'bad request' });
    }
});

mapsRouter.get('/', async (req, res) => {
    const { Map } = req.context.models;

    const maps = await Map.find();

    res.status(ResponseStatus.Success).json(maps.map(sanitizeMap));
});

mapsRouter.get<{ id: string }>('/:id', async (req, res) => {
    const { Map } = req.context.models;
    const { id } = req.params;

    const map = await Map.findById(id);

    if (!map) return res.status(ResponseStatus.NotFound).json({ message: 'not found' });

    res.status(ResponseStatus.Success).json(sanitizeMap(map));
});

export default mapsRouter;
