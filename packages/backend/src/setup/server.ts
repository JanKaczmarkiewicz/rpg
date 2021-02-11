import express from 'express';
import modelContextMiddleware from '../middlewares/modelContext';
import mapsRouter from '../routes/maps';
import connectToDatabase from './connectToDatabase';
import logger from './logger';
import bodyParser from 'body-parser';

async function server() {
    const app = express();

    await connectToDatabase();
    logger.info(`Successful connection to database.`);

    app.use(bodyParser.json());
    app.use(modelContextMiddleware);
    app.use('/api/maps', mapsRouter);

    app.listen(process.env.SERVER_PORT);
    logger.info(`Server started on port ${process.env.SERVER_PORT}.`);
    return app;
}

export default server;
