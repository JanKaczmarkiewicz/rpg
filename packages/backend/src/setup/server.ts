import express from 'express';
import modelContextMiddleware from '../middlewares/modelContext';
import logger from './logger';

async function server() {
    const app = express();

    app.use(modelContextMiddleware);

    app.listen(process.env.SERVER_PORT);
    logger.info(`Server started on port ${process.env.SERVER_PORT}`);
    return app;
}

export default server;
