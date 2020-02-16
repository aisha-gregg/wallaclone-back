const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  sell: { type: Boolean },
  price: { type: Number },
  image: String,
  tags: { type: [String] },
  userId: { type: String },
  isSold: { type: Boolean }
});
adSchema.index({ name: "text" });
mongoose.model("ad", adSchema);
