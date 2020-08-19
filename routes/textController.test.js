const textController = require("./textController");
const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.json());
app.use("/api/v1/text", textController);

const formData = {
  text: "random text",
};

it("post text correctly", (done) => {
  request(app)
    .post("/api/v1/text")
    .send(formData)
    .expect("Content-type", /json/)
    .expect(200, done);
});
