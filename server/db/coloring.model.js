const mongoose = require('mongoose');
const { Schema } = mongoose;

const ColoringSchema = new Schema({
  date: String,
  colors: Object
});

module.exports = mongoose.model("Coloring", ColoringSchema);