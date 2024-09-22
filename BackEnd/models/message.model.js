const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  towho: { type: String },
  message: { type: String },
  colorcode: {type: String},
  tags: { type: [String], default: [] },
  created: { type: Date, default: new Date().getTime() },
});

module.exports = mongoose.model("Message", messageSchema);
