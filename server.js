const express = require("express");
const Flavours = require("./models/iceModel");

const app = express();
const db = require("./db.js");
app.use(express.json());

const flavoursRoutes = require("./routes/flavoursRoutes");
const userRoute = require("./routes/userRoute");

app.use("/api/flavours/", flavoursRoutes);
app.use("/api/users/", userRoute);

app.get("/", (req, res) => {
  res.send("server working now");
});

const port = process.env.PORT || 8000;
app.listen(port, () => "server running on port port");
