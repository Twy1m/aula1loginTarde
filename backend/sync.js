const { Cliente, Dispositivo, Agendamento } = require('./models/rel')
const conn = require('./db/conn')

async function syncDataBase() {
    try{
        await conn.sync({force: true})
    }catch(err){
        console.error('erro ao sincronizar', err)
    }finally{
        await conn.close()
        console.log('finalizando conexão')
    }
}

syncDataBase()