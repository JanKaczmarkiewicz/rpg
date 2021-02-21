import { ResponseStatus } from '../../constants/constants';
import { object, string } from 'yup';
import validate from '../../middleware/validate';
import { Response, Request, RequestHandler } from 'express';

export type DeleteMapParams = { id: string };

export const validateDeleteMapParams = validate(
    'params',
    object({
        id: string().objectId().required(),
    }),
);

const deleteMap: RequestHandler<DeleteMapParams> = async (req, res) => {
    const { Map } = req.context.models;
    const { id } = req.params;

    const map = await Map.findByIdAndDelete(id);

    if (!map) return res.status(ResponseStatus.NotFound).json({ deleted: false });

    res.status(ResponseStatus.Success).json({ deleted: true });
};

export default deleteMap;
