const mongoose = require('mongoose');
const { Schema } = mongoose;

// Developed a new schema for pushing movie booking information.
const bookMovieSchema = new Schema({
    movie: { type: String },
    slot: { type: String },
    seats: {
        A1: { type: Number },
        A2: { type: Number },
        A3: { type: Number },
        A4: { type: Number },
        D1: { type: Number },
        D2: { type: Number }
    }

})

// Registering the schema with Mongoose model.
module.exports = mongoose.model('bookmyshow', bookMovieSchema);
