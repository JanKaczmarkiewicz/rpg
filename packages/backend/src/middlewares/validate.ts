import { RequestHandler, Request } from 'express';
import * as yup from 'yup';
import { ResponseStatus } from '../constants/constants';

const formatErrors = (err: yup.ValidationError) => ({
    error: err.inner.map(({ path, errors }) => ({ path, info: errors })),
});

const validate = (
    path: keyof Pick<Request, 'body' | 'params'>,
    schema: yup.ObjectSchema<any>,
): RequestHandler => async (req, res, next) => {
    try {
        await schema.validate(req[path], { abortEarly: false });
        next();
    } catch (err: unknown) {
        if (err instanceof yup.ValidationError) return res.status(ResponseStatus.BadRequest).json(formatErrors(err));

        return res.status(ResponseStatus.BadRequest);
    }
};

export default validate;
