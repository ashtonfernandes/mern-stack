const mongoose = require('mongoose');

// mongoose schema
const Schema = mongoose.Schema;

// create a schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// create a model that takes in a name and the schema
module.exports = Item = mongoose.model('item', ItemSchema);
