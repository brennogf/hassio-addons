const express = require("express");
const { Router } = require("express");

const app = express();
const routes = Router();

routes.get("/test", async index(req, res) {
           res.json({ success: true });
           });

app.use(express.json());
app.use(routes);

app.listen(3001);
