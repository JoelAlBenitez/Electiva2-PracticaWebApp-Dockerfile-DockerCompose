
const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const PORT = 3000;

const db = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "123456",
    database: process.env.DB_NAME || "hola_mundo"
});

app.get("/", async (req, res) => {
    try {

        const [resultado] = await db.query("SELECT 1 AS conexion");

        res.send(`
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <title>Hola Mundo</title>
            </head>
            <body>
                <h1>¡Hola Mundo!</h1>
                <p>Mi primera aplicacion web con JavaScript y Docker. Por Joel Benitez  | 2025-1049</p>
                <h2>Conexion a MySQL</h2>
                <p>Estado: Conectado correctamente.</p>
                <p>Resultado de la consulta: ${resultado[0].conexion}</p>
            </body>
            </html>
        `);
    } catch (error) {
        console.error("Error al conectar con MySQL:", error.message);

        res.status(500).send(`
            <h1>¡Hola Mundo!</h1>
            <p>No se pudo conectar con la base de datos.</p>
        `);
    }
});



app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
