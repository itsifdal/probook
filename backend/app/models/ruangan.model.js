/**
 * These columns will be generated automatically: 
 * id, title, description, published, createdAt, updatedAt.
 * create a new Post: create(object)
 * find a Post by id: findByPk(id)
 * get all Posts: findAll()
 * update a Post by id: update(data, where: { id: id })
 * remove a Post: destroy(where: { id: id })
 * remove all Posts: destroy(where: {})
 * find all Posts by title: findAll({ where: { title: ... } })
 * These functions will be used in our Controller.
 */
module.exports = (sequelize, Sequelize) => {
    const Ruangan = sequelize.define("ruangan", {
        // name: {
        //     type: Sequelize.STRING
        // },
        // image: {
        //     type: Sequelize.STRING
        // },
        // description: {
        //     type: Sequelize.STRING
        // }
        kode_ruangan: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        status: {
            type: Sequelize.STRING
        },
        nama_ruangan: {
            type: Sequelize.STRING
        }
    });

    return Ruangan;
}