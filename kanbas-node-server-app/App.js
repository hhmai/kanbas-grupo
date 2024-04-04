import express from 'express';
import Lab5 from "./a5/Lab5.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
Lab5(app);
app.listen(4000);