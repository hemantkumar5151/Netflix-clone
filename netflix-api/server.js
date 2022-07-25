const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const app = express();
dotenv.config({ path: "./config.env" });
app.use(cors());
app.use(express.json());
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/nextflix-ui/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "nextflix-ui", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

mongoose
  .connect(process.env.MONGDO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server started on port 5000");
});
