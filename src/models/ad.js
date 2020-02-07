const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
  name: { type: String, index: true },
  description: { type: String, index: true },
  sell: { type: Boolean, index: true },
  price: { type: Number, index: true },
  image: String,
  tags: { type: [String], index: true }
});

mongoose.model("ad", adSchema);
