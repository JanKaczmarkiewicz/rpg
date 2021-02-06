import mongoose from 'mongoose';

const connectToDatabase = () =>
    mongoose.connect(process.env.MONGO_CONNECTION_STRING!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

export default connectToDatabase;
