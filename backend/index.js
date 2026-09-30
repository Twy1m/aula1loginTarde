const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000
const hostname = 'localhost'

const conn = require('./db/conn')

const clienteController = require('./controller/cliente.controller')
const authController = require('./controller/auth.controller')

// ------------ Middleware ------------

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// Rotas Públicas

app.post('/cliente', clienteController.cadastrar)
app.post('/login', authController.login)

app.get('/', (req, res) => {
    res.status(200).json({ message: "Aplicação rodando!" })
})


conn.sync()
    .then(() => {
        app.listen(PORT, hostname, () => {
            console.log(`Servidor rodando em ${hostname}:${PORT}`)
        })
    })
    .catch((err) => {
        console.error('Erro ao conectar com o banco de dados!', err)
})