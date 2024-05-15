import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";

const PORT =  8001;
const app = express();
app.use(cors({
  origin: '*'
}));
app.use(express.json())
app.use(router)
db().then(() => console.log("Connection with Mongo ready"))
app.listen(PORT, ()=> console.log(
  `App listening on port ${PORT}`
))
