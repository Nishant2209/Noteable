const connectToMongo = require("./server");
const express = require("express");
connectToMongo();
const app = express();
const port = 3000;

app.use("/api/auth", require(`./routes/auth`));
app.use("/api/notes", require(`./routes/notes`));
app.get("/", (req, res) => {
  res.send("hello bitches !!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
