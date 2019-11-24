var db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {

        db.burger.findAll({

        }).then(function (data) {

            const objectB = {
                burgers: data
            }
            res.render("index", objectB)
        })
    })

    app.post("/api/burgers", function (req, res) {

        let newBurger = req.body
        db.burger.create({
            burger_name: newBurger.burger_name,
            devoured: false

        }).then(function (result) {
            console.log(result)
            return res.json({ id: result.insertId });
        })
        res.status(204).end();
    })

    app.put("/api/burgers/:id", function (req, res) {

        db.burger.update(
            { devoured: true },
            { where: req.params.id }

        ).then(function (result) {
            return res.json(result)
        })
    })


    app.delete("/api/burgers/:id", function (req, res) {
        db.burger.destroy({
            where: { id: req.params.id }
        }
        ).then(function (result) {
            return res.json(result);
        });
    });

}