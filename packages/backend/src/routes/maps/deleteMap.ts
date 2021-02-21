import { RequestHandler } from 'express';
import { object, string } from 'yup';
import { ResponseStatus } from '../../constants/constants';
import validate from '../../middleware/validate';
import { error } from '../../middleware/errorHandler';

export type DeleteMapParams = { id: string };

export const validateDeleteMapParams = validate(
    'params',
    object({
        id: string().objectId().required(),
    }),
);

const deleteMap: RequestHandler<DeleteMapParams> = async (req, res, next) => {
    const { Map } = req.context.models;
    const { id } = req.params;

    const map = await Map.findByIdAndDelete(id);

    if (!map) return next(error.notFound({ id: ['Map not found.'] }));

    return res.status(ResponseStatus.Success).json({ deleted: true });
};

export default deleteMap;
