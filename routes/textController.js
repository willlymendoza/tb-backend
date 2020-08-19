const express = require("express");
const router = express.Router();

router.post("/", async (request, response) => {
  if (!request.body.text || request.body.text.trim() === "") {
    response.status(400).send({ message: "text is a required field" });
  }

  response.status(200).send({ text: request.body.text });
});

module.exports = router;
