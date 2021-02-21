import { ResponseStatus } from '../../constants/constants';
import { object, string } from 'yup';
import validate from '../../middleware/validate';
import { Response, Request, RequestHandler } from 'express';

export type DeleteEnemyParams = { id: string };

export const validateDeleteEnemyParams = validate(
    'params',
    object({
        id: string().objectId().required(),
    }),
);

const deleteEnemy: RequestHandler<DeleteEnemyParams> = async (req, res) => {
    const { Enemy } = req.context.models;
    const { id } = req.params;

    const deletedEnemy = await Enemy.findByIdAndDelete(id);

    if (!deletedEnemy) return res.status(ResponseStatus.NotFound).json({ deleted: false });

    res.status(ResponseStatus.Success).json({ deleted: true });
};

export default deleteEnemy;
