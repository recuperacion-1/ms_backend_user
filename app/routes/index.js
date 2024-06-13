import { Router } from "express";
import rutasalon from "./routes.salon";

const ruta = Router();

ruta.get("/", (req, res) => {
  res.send("¡Bienvenido a la aplicación!");
});

ruta.use("/api", rutasalon);

export default ruta;
