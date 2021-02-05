import { Request, Response, NextFunction } from 'express';

const modelContextMiddleware = (req: Request, res: Response, next: NextFunction) => {
    req.context = {
        ...req.context,
        models: {},
    };
    next();
};

export default modelContextMiddleware;
