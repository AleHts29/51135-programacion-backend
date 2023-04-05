import mongoose from 'mongoose';

const userCollection = 'usuarios';

const stringTypeSchemaUniqueRequired = {
    type: String,
    unique: true,
    required: true
};

const stringTypeSchemaNonUniqueRequired = {
    type: String,
    required: true
};


const userSchema = new mongoose.Schema({
    first_name: stringTypeSchemaNonUniqueRequired,
    last_name: stringTypeSchemaNonUniqueRequired,
    email: stringTypeSchemaUniqueRequired
});

export const userModel = mongoose.model(userCollection, userSchema);