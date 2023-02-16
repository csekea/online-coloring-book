const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ColoringModel = require("./db/coloring.model");
const MONGO_URL = "mongodb://127.0.0.1:27017/coloring-book";
const PORT = 8080;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/colorings/", async (req, res) => {
  const colorings = await ColoringModel.find();
  res.json(colorings);
});


app.post("/api/colorings/", async (req, res) => {
  const coloring = req.body;
  const date = `${new Date(Date.now()).toLocaleDateString()} ${new Date(Date.now()).toLocaleTimeString()}`;
  const newColoring = { date: date, colors: coloring };
  const saved = ColoringModel.create(newColoring);
  res.json(saved);
});

app.get("/api/colorings/:id", async (req, res) => {
  const id = req.params.id;
  const coloring = await ColoringModel.findOne({ _id: id });
  res.json(coloring);
});

app.patch("/api/colorings/:id", async (req, res) => {
  const id = req.params.id;
  const coloring = req.body;
  const newColoring = await ColoringModel.updateOne({ _id: id }, { colors: coloring });
  console.log(id, newColoring);
  res.json(newColoring);
});

app.delete("/api/colorings/:id", async (req, res) => {
  const id = req.params.id;
  const coloring = await ColoringModel.deleteOne({ _id: id });
  res.json(coloring);
});


const main = async () => {
  await mongoose.connect(MONGO_URL);

  app.listen(PORT, () => {
    console.log("App is listening on 8080");
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});