import Map from '../models/Map/Map';

export type Context = {
    models: { Map: typeof Map };
};

declare module 'express-serve-static-core' {
    export interface Request {
        context: Context;
    }
}
