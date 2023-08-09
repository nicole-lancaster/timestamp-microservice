import express from "express";
import cors from "cors";
import { getBasicHtml, getCurrentDate, getDate } from "./app.controllers";
export const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static("public"));

app.get("/", getBasicHtml);
app.get("/api", getCurrentDate);
app.get("/api/:date", getDate);
