const express = require("express");
const cors = require("cors");
const app = express();

const textController = require("./routes/textController");

app.use(cors());
app.use(express.json());
app.use("/api/v1/text", textController);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
