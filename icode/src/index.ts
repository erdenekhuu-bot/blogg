import express from "express";
import router from "./route/routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("Server is running on 3000 port ...");
});
