import express from "express";
import { userRoutes } from "./routes/user.routes";
import { videosRoutes } from "./routes/videos.routes";
import { config } from "dotenv";

config();

const app = express();
const port = 4000;

app.use(express.json());
app.use("/user", userRoutes);
app.use("/videos", videosRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
