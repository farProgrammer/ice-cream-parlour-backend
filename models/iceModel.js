const mongoose = require("mongoose");
const iceSchema = mongoose.Schema(
  {
    name: { type: String, require },
    varient: [],
    prices: [],
    category: { type: String, require },
    image: { type: String, require },
    description: { type: String, require },
  },
  {
    timestamps: true,
  }
);
const iceModel = mongoose.model("flavours", iceSchema);
module.exports = iceModel;
