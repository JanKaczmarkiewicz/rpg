import mongoose from 'mongoose';

mongoose.set('debug', true);

const connectToDatabase = () =>
    mongoose.connect(process.env.MONGO_CONNECTION_STRING!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

export default connectToDatabase;
