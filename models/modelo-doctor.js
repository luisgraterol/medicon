const Sequelize = require('sequelize');
const orm = require('./../controllers/orm-connection');

const connection = orm.ormConnection;

let Doctor = connection.define('Doctores',
{
  idDoctor: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: modelo-persona,
      key: 'idPersona',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
},
  FechaI: {
    type: Sequelize.DATE,
    allowNull: false
  }
},
{
  timestamps: false,
  freezeTableName: true
}
);

module.exports = Doctor;
