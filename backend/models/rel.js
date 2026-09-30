const Cliente = require('./Cliente')
const Dispositivo = require('./Dispositivo')
const Agendamento = require('./Agendamento')

Cliente.hasMany(Dispositivo,{
    foreignKey: 'idCliente',
    as: 'dispositivoCliente',
    onDelete: 'CASCADE'
})

Dispositivo.belongsTo(Cliente,{
    foreignKey: 'idCliente',
    as: 'clienteDispositivo',
    allowNull: false
})

Cliente.hasMany(Agendamento,{
    foreignKey: 'idCliente',
    as: 'agendamentoCliente',
    onDelete: 'CASCADE'
})

Agendamento.belongsTo(Cliente,{
    foreignKey: 'idCliente',
    as: 'clienteAgendamento',
    allowNull: false
})

Dispositivo.hasMany(Agendamento,{
    foreignKey: 'idDispositivo',
    as: 'agendamentoDispositivo',
    onDelete: 'CASCADE'
})

Agendamento.belongsTo(Dispositivo,{
    foreignKey: 'idDispositivo',
    as: 'clienteDispositivo',
    allowNull: false
})

module.exports = { Cliente, Dispositivo, Agendamento}