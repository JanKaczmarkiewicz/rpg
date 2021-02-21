import { ErrorRequestHandler } from 'express';
import { ResponseStatus } from '../constants/constants';

type Messages = Record<string, string[]>;

enum ErrorKind {
    Validation = 'Validation',
}

interface Error {
    meta: Messages;
    kind: ErrorKind;
}
export class ValidationError implements Error {
    kind = ErrorKind.Validation;
    meta;

    constructor(meta: Messages) {
        this.meta = meta;
    }
}

const formatError = (error: ValidationError) => ({
    error: {
        kind: error.kind,
        meta: error.meta,
    },
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (err instanceof ValidationError) return res.status(ResponseStatus.BadRequest).json(formatError(err));
};

export default errorHandler;
