const mongoose = require("mongoose");
var mongoURL =
  "mongodb+srv://admin:admin123@cluster0.ti0ez.mongodb.net/ice-cream-parlour";
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });
var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongodb Connection Successfully");
});

db.on("error", () => {
  console.log("Mongodb Connection Error");
});

module.exports = mongoose;
