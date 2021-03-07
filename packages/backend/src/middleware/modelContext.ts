import { RequestHandler } from 'express';
import Map from '../models/Map/Map';
import Enemy from '../models/Enemy/Enemy';

const modelContextMiddleware: RequestHandler = (req, res, next) => {
    req.context = {
        ...req.context,
        models: {
            Map,
            Enemy,
        },
    };
    next();
};

export default modelContextMiddleware;
