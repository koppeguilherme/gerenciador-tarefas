const database = require('../database/db')

class Post {
    constructor() {
        this.model = database.db.define('projetos', {
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
                type: database.db.Sequelize.STRING
            },
            autorId: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id'
                }
            }
        })
    }
}

module.exports = (new Post()).model