const { DataTypes } = require("sequelize")
const conn = require("../db/conn")

const Agendamento = conn.define(
	"agendamento",
	{
		codAgendamento: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		data: {
			type: DataTypes.DATE,
			allowNull: false
		},
		hora: {
			type: DataTypes.TIME,
			allowNull: false
		},
		idCliente: {
            type: DataTypes.INTEGER,
            references: {
                module: 'clientes',
                key: 'codCliente'
            }
        },
		idDispositivo: {
            type: DataTypes.INTEGER,
            references: {
                module: 'dispositivos',
                key: 'codDispositivo'
            }
        },
	},
	{
		timestamps: false,
		tableName: "agendamentos"
	}
)

module.exports = Agendamento
