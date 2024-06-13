import express from "express";
import { config } from "dotenv";
import ruta from "./routes";

config();
const app = express();

app.use(express.json());

app.set("port", process.env.PORT || 3000);

// Ruta
app.use("/", ruta);

export default app;
