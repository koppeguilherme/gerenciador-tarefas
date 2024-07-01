const { DataTypes } = require('sequelize');
const database = require('../database/db')

class Tarefa {
    constructor() {
        this.model = database.db.define('tarefa', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titulo: {
                type: database.db.Sequelize.STRING
            },
            descricao: {
                type: database.db.Sequelize.STRING
            },
            status: {
                type: database.db.Sequelize.STRING,
                defaultValue: 'Pendente'
            },
            projetoId: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: 'projetos',
                    key: 'id'
                }

            }
        });
    }
}

module.exports = (new Tarefa).model;