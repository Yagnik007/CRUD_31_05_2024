const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json);

app.get("/", (req, res) => {
  res.send(`Hello from Node API!`);
});

app.use("/api/products", (req, res) => {
  console.log(req.body);
  res.send(req.body); 
});

mongoose
  .connect(
    "MONGO_URI"
  )
  .then(() => {
    console.log(`connected to database!`);
    app.listen(3000, () => {
      console.log(`Server is running on port 3000!`);
    });
  })
  .catch((err) => {
    console.log(`connection failed!`, err);
  });
