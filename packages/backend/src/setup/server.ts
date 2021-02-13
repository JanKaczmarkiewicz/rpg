import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import connectToDatabase from './connectToDatabase';
import logger from './logger';
import './setupYup';

import modelContextMiddleware from '../middleware/modelContext';
import mapsRouter from '../routes/maps';

async function server() {
    const app = express();

    await connectToDatabase();
    logger.info(`Successful connection to database.`);

    app.use(bodyParser.json());
    app.use(cors());
    app.use(modelContextMiddleware);
    app.use('/api/maps', mapsRouter);

    app.listen(process.env.SERVER_PORT);
    logger.info(`Server started on port ${process.env.SERVER_PORT}.`);
    return app;
}

export default server;
