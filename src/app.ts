import express from "express";
import cors from "cors";
import { getBasicHtml } from "./app.controllers";
export const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/api", getBasicHtml);
