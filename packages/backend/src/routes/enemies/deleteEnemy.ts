import { RequestHandler } from 'express';
import { object, string } from 'yup';
import { ResponseStatus } from '../../constants/constants';
import validate from '../../middleware/validate';
import { error } from '../../middleware/errorHandler';

export type DeleteEnemyParams = { id: string };

export const validateDeleteEnemyParams = validate(
    'params',
    object({
        id: string().objectId().required(),
    }),
);

const deleteEnemy: RequestHandler<DeleteEnemyParams> = async (req, res, next) => {
    const { Enemy } = req.context.models;
    const { id } = req.params;

    const deletedEnemy = await Enemy.findByIdAndDelete(id);

    if (!deletedEnemy) return next(error.notFound({ id: ['Enemy not found.'] }));

    return res.status(ResponseStatus.Success).json({ deleted: true });
};

export default deleteEnemy;
