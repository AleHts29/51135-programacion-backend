import moongose from 'mongoose';

const schema = new moongose.Schema({
    // name: String,
    name: {
        type: String,
        unique: true,
        required: true
    },
    category: String,
    products: []
});

const businessModel = moongose.model('businesses', schema);
export default businessModel;