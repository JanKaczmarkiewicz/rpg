import { RequestHandler, Request } from 'express';
import * as yup from 'yup';
import { ValidationError } from './errorHandler';

export const formatValidationError = (err: yup.ValidationError) =>
    err.inner.reduce((prev, { path = '', errors }) => ({ ...prev, [path]: errors }), {});

const validate = (
    path: keyof Pick<Request, 'body' | 'params'>,
    schema: yup.ObjectSchema<any>,
): RequestHandler => async (req, res, next) => {
    try {
        await schema.validate(req[path], { abortEarly: false });
    } catch (err: unknown) {
        if (err instanceof yup.ValidationError) return next(new ValidationError(formatValidationError(err)));
    }
    next();
};

export default validate;
