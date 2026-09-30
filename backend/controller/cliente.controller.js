const Cliente = require('../models/Cliente')
const crypto = require('crypto-js')
const CHAVESECRETA = 'Senha'

const cadastrar = async (req, res) => {
    let valores = req.body

    if (!valores.nome || !valores.email || !valores.senha || !valores.cpf || !valores.telefone) return res.status(400).json({ message: 'prencha todos os campos' })

    try {
        let cpfCripto = crypto.AES.encrypt(valores.cpf, CHAVESECRETA).toString()
        let senhaCripto = crypto.AES.encrypt(valores.senha, CHAVESECRETA).toString()

        await Cliente.create(valores = {
            ...valores,
            cpf: cpfCripto,
            senha: senhaCripto
        })

        res.status(201).json({ message: 'cliente cadastrado com sucesso' })

    }catch(err){
        res.status(500).json({message:'erro ao cadastrar'})
        console.error('erro ao cadastrar', err)
    }
}

module.exports = {cadastrar}