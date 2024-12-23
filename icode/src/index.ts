import express from "express";
import router from "./route/routes";

const app = express();
app.use(router);

app.listen(3000, () => {
  console.log("REST API listening on 3000 port ...");
});
