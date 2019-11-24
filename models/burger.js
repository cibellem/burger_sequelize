module.exports = function (Sequelize, Datatypes) {
    const Burger = Sequelize.define("burger", {
        burger_name: Datatypes.STRING,
        devoured: Datatypes.BOOLEAN
    })


    return Burger
}


