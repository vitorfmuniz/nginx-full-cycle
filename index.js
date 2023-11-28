const express = require("express");
const bodyParser = require('body-parser');
const mysql = require("mysql");
const dotenv = require('dotenv');
dotenv.config();
const app = express();


app.use(bodyParser.json({ extended: false }))

// Conectando ao banco de dados
const db = mysql.createConnection({
    host: "db",
    user: "root",
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_ROOT_PASSWORD,
});

// Rota para inserir dados
app.post("/api/names", (req, res) => {
    // Obtém os dados da solicitação
    const data = req.body;
    // Insere os dados no banco de dados
    const sql = `
      INSERT INTO names (name)
      VALUES ('${data.name}')
    `;
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send({
                message: "Dados inseridos com sucesso"
            });
        }
    });
});

app.get("/", (req, res) => {
    // Criando uma consulta para selecionar todos os nomes
    const sql = "SELECT name FROM names";

    console.log("Conectado ao banco de dados");

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(`
            <h1>Full Cycle Rocks!</h1>
            <ul>
                ${result.map((row) => `<li>${row.name}</li>`).join("<br>")}
            </ul>
        `);
        }
    });
});

// Iniciando o servidor
app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000");
});