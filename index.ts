import { App } from "@tinyhttp/app";
const server = new App();

const PORT = process.env.PORT || 3000;
server.get("/", (req, res) => {
  console.log(req.query);
  res.json({ message: "hi" });
});
server.listen(3000, () => {
  console.log(`Started http://localhost:${PORT}`);
});
