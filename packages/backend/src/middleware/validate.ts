import { RequestHandler, Request } from 'express';
import * as yup from 'yup';
import { ResponseStatus } from '../constants/constants';

type RequestError = { path: string; messages: string[] };

export const formatValidationError = (err: yup.ValidationError): RequestError[] =>
    err.inner.map(({ path, errors }) => ({ path: path || 'undefined', messages: errors }));

export const errors = (errors: RequestError[]) => ({
    errors,
});

const validate = (
    path: keyof Pick<Request, 'body' | 'params'>,
    schema: yup.ObjectSchema<any>,
): RequestHandler => async (req, res, next) => {
    try {
        await schema.validate(req[path], { abortEarly: false });
        next();
    } catch (err: unknown) {
        if (err instanceof yup.ValidationError)
            return res.status(ResponseStatus.BadRequest).json(errors(formatValidationError(err)));

        return res.status(ResponseStatus.BadRequest);
    }
};

export default validate;
