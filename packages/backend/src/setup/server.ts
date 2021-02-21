import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import connectToDatabase from './connectToDatabase';
import logger from './logger';
import './setupYup';

import modelContextMiddleware from '../middleware/modelContext';
import mapsRouter from '../routes/maps';
import enemiesRouter from '../routes/enemies';
import errorHandler from '../middleware/errorHandler';

async function server() {
    const app = express();

    await connectToDatabase();
    logger.info(`Successful connection to database.`);

    app.use(bodyParser.json());
    app.use(cors());
    app.use(modelContextMiddleware);
    app.use('/api/maps', mapsRouter);
    app.use('/api/enemies', enemiesRouter);
    app.use(errorHandler);

    app.listen(process.env.SERVER_PORT);
    logger.info(`Server started on port ${process.env.SERVER_PORT}.`);
    return app;
}

export default server;
