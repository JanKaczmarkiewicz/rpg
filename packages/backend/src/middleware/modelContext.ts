import { RequestHandler } from 'express';
import Map from '../models/Map/Map';

const modelContextMiddleware: RequestHandler = (req, res, next) => {
    req.context = {
        ...req.context,
        models: {
            Map,
        },
    };
    next();
};

export default modelContextMiddleware;
