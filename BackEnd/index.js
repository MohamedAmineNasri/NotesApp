const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
    res.json({
        data: "Hello, World"
    })
})

app.listen(8000, () => {
    console.log('Server is running on 8000 port')
});

module.exports = app;
