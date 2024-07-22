import express from "express";
const app = express();
const port = 4000;

app.use(express.json());

let req: any;

app.post("/userdata/:id", (request, response) => {
  console.log((req = request.body));
  console.log(request.params);
  console.log(request.query);
  console.log(request.headers);
  response.status(200).json({ success: true });
});

app.get("/users", (request, response) => {
  response.json([
    { name: "Paulo", age: 22 },
    { name: "Jose", age: 30 },
  ]);
});

app.get("/", (request, response) => {
  response.json(req);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
