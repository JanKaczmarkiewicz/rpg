import Enemy from '../../models/Enemy/Enemy';
import Map from '../../models/Map/Map';

export type Context = {
    models: { Map: typeof Map; Enemy: typeof Enemy };
};

declare module 'express-serve-static-core' {
    export interface Request {
        context: Context;
    }
}
