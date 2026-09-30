const { DataTypes } = require("sequelize")
const conn = require("../db/conn")

const Dispositivos = conn.define(
	"dispositivo",
	{
		codDispositivo: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		modelo: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		marca: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		numSerie: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		idCliente: {
			type: DataTypes.INTEGER,
			references: {
				module: "clientes",
				key: "codCliente"
			}
		}
	},
	{
		timestamps: false,
		tableName: "dispositivos"
	}
)

module.exports = Dispositivos
