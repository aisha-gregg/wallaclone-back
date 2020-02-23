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
adSchema.set("toObject", { virtuals: true });
adSchema.set("toJSON", { virtuals: true });
adSchema.index({ name: "text", userId: "text" });
adSchema.virtual("url").get(function() {
  return `${encodeURIComponent(
    this.name.replace(/ /g, "-").toLowerCase()
  )}-${this._id}`;
});
mongoose.model("ad", adSchema);
