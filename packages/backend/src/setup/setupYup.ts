import { Types } from 'mongoose';
import { addMethod, string } from 'yup';

addMethod(string, 'objectId', function () {
    return this.test((value) => {
        if (!value) return true;
        return Types.ObjectId.isValid(value);
    });
});
