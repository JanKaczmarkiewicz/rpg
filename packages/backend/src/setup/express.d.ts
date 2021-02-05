export type Context = {
    models: {};
};

declare module 'express-serve-static-core' {
    export interface Request {
        context: Context;
    }
}
