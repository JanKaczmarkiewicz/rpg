import { ErrorRequestHandler } from 'express';
import { ResponseStatus } from '../constants/constants';

type Messages = Record<string, string[]>;

enum ErrorKind {
    Validation = 'Validation',
    NotFound = 'NotFound',
    Unknown = 'Unknown',
}

interface Error {
    meta: Messages;
    kind: ErrorKind;
    status: ResponseStatus;
}

export const error: Record<string, (meta?: Messages) => Error> = {
    validation: (meta = {}) => ({ meta, status: ResponseStatus.BadRequest, kind: ErrorKind.Validation }),
    notFound: (meta = {}) => ({ meta, status: ResponseStatus.NotFound, kind: ErrorKind.NotFound }),
    unknown: (meta = {}) => ({ meta, status: ResponseStatus.InternalServerError, kind: ErrorKind.Unknown }),
};

const errorHandler: ErrorRequestHandler = ({ kind, status, meta }: Error, req, res, next) => {
    return res.status(status).json({ error: { kind, meta } });
};

export default errorHandler;
