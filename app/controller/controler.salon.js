import pool from "../db/pool";
import mesaje from "../res/mesaje";

// Mostrar un salon por su ID
const mostrarsalon = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await pool.query(`CALL 	sp_Mostrarsalon(?)`, [id]);
        mesaje.success(req, res, 200, result[0]);
    } catch (error) {
        mesaje.error(req, res, 500, "Error al mostrar el salón");
    }
};

// Listar todos los salones
const listarsalon = async (req, res) => {
    try {
        const result = await pool.query(`CALL sp_Listarestudiante()`);
        mesaje.success(req, res, 200, result[0]);
    } catch (error) {
        mesaje.error(req, res, 500, "Error al listar los salones");
    }
};

// Insertar un nuevo salon
const Crearestudiante = async (req, res) => {
    const { nombre, estudiante, clave } = req.body;
    try {
        const result = await pool.query(`CALL 	sp_Crearestudiante(?, ?, ?)`, [nombre, estudiante, clave]);
        if (result[0].affectedRows == 1) {
            mesaje.success(req, res, 200, "Salón creado exitosamente");
        } else {
            mesaje.error(req, res, 400, "No se pudo crear el salón");
        }
    } catch (error) {
        mesaje.error(req, res, 500, "Error al crear el salón");
    }
};

// Actualizar un salon por su ID
const actualizarsalon = async (req, res) => {
    const { id, nombre, estudiante, clave } = req.body;
    try {
        const result = await pool.query(`CALL sp_Modificarestudiante(?, ?, ?, ?)`, [id, nombre, estudiante, clave]);
        if (result[0].affectedRows == 1) {
            mesaje.success(req, res, 200, "Salón modificado exitosamente");
        } else {
            mesaje.error(req, res, 400, "No se pudo modificar el salón");
        }
    } catch (error) {
        mesaje.error(req, res, 500, "Error al modificar el estudiante");
    }
};

// Eliminar un salon por su ID
const eliminarsalon = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await pool.query(`CALL sp_Eliminarestudiante(?)`, [id]);
        if (result[0].affectedRows == 1) {
            mesaje.success(req, res, 200, "Salón eliminado exitosamente");
        } else {
            mesaje.error(req, res, 400, "No se pudo eliminar el salón");
        }
    } catch (error) {
        mesaje.error(req, res, 500, "Error al eliminar el salón");
    }
};

export const metodos = { 
    mostrarsalon,
    listarsalon,
    Crearestudiante,
    actualizarsalon,
    eliminarsalon
};
