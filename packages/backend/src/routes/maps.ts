import { Router } from 'express';
import { ContentKind, RequestStatus } from '../constants/constants';

const mapsRouter = Router();

mapsRouter.post('/', async (req, res) => {
    const { Map } = req.context.models;

    const doc = await new Map({
        backgroundUrl: 'http://fobos.margonem.pl/obrazki/miasta/wio2-ruin2.png',
        tiles: Array(16)
            .fill(null)
            .map((_, i) =>
                Array(24)
                    .fill(null)
                    .map((__, j) =>
                        j % 2 === 0
                            ? {
                                  kind: ContentKind.Npc,
                              }
                            : {
                                  kind: ContentKind.Enemy,
                              },
                    ),
            ),
    }).save();

    res.status(RequestStatus.Success).json(doc);
});

mapsRouter.get('/', async (req, res) => {
    const { Map } = req.context.models;

    const maps = await Map.find();

    res.status(RequestStatus.Success).json(maps);
});

mapsRouter.get<{ id: string }>('/:id', async (req, res) => {
    const { Map } = req.context.models;
    const { id } = req.params;

    const map = await Map.findById(id);

    if (!map) return res.status(RequestStatus.NotFound).json({ message: 'not found' });

    res.status(RequestStatus.Success).json(map);
});

export default mapsRouter;
