const Cliente = require('../models/Cliente')
const crypto = require('crypto-js')
const CHAVESECRETA = 'Senha'

const login = async (req, res)=>{
    const valores = req.body

    if(!valores.email || !valores.senha) return res.status(400).json({message: 'Todos os campos precisam ser preenchidos'})

    try{
        const cliente = await Cliente.findOne({where: {email: valores.email}})

        if(!cliente) return res.status(404).json({message: "cliente não encontrado"})

        const bytes = crypto.AES.decrypt(cliente.senha, CHAVESECRETA)
        const senha = bytes.toString(crypto.enc.Utf8)

        if(valores.senha !== senha ) return res.status(401).json({message: 'senha incorreta!'})

        const trintaMin = 30 * 60 * 1000
        const tempoExpira = Date.now() + trintaMin

        const payload = {
            idCliente: cliente.codCliente,
            nome: cliente.nome,
            expiraEm: tempoExpira,
        }

        const token = crypto.AES.encrypt(JSON.stringify(payload),CHAVESECRETA).toString()

        return res.status(200).json({
            message: 'Login realizado com sucesso',
            nome: cliente.nome,
            token: token
        })
    }catch(err){
        console.error('erro ao realizar o login', err)
        res.status(500).json({message: 'erro ao realizar o login'})
    }
}

module.exports = { login }