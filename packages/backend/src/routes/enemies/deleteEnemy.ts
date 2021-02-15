import { ResponseStatus } from '../../constants/constants';
import { object, string } from 'yup';
import validate from '../../middleware/validate';
import { Response, Request } from 'express';

type DeleteEnemyParams = { id: string };

export const validateDeleteEnemyParams = validate(
    'params',
    object({
        id: string().objectId().required(),
    }),
);

const deleteEnemy = async (req: Request<DeleteEnemyParams>, res: Response) => {
    const { Enemy } = req.context.models;
    const { id } = req.params;

    const deletedEnemy = await Enemy.findByIdAndDelete(id);

    if (!deletedEnemy) return res.status(ResponseStatus.NotFound).json({ deleted: false });

    res.status(ResponseStatus.Success).json({ deleted: true });
};

export default deleteEnemy;
