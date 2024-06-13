// En tu archivo de rutas de salones (routes.salon.js)
import { Router } from "express";
import { metodos } from "../controller/controler.salon";

const rutasalon = Router();

rutasalon.get("/salon/:id", metodos.mostrarsalon);
rutasalon.get("/salon", metodos.listarsalon);
rutasalon.post("/salon", metodos.Crearestudiante);
rutasalon.put("/salon/:id", metodos.actualizarsalon); 
rutasalon.delete("/salon/:id", metodos.eliminarsalon);

export default rutasalon;
