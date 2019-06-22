const pool = require("../connections").pool;
const bcrypt = require("bcrypt")

function create(req, res) {
    console.log(req.body)
    pool.query("SELECT * FROM BaseballStats WHERE email = ?",
        [req.body.email], (err, querryReturn) => {
            console.log(err)
            if (querryReturn[0]) {
                return res.send("EMAIL ALREADY EXIST")

            }
            let password = bcrypt.hashSync(req.body.password, 5);
            let email = req.body.email;
            pool.query("INSERT INTO BaseballStats (firstName, lastName, phone, streetAddress, city, state, postalCode, email, password) VALUES(?,?,?,?,?,?,?,?,?)", [req.body.firstName, req.body.lastName, req.body.phoneNumber, req.body.streetAddress, req.body.city, req.body.state, req.body.postalCode, req.body.email, password], (err, result) => {
                if (!err) {
                    return res.send({ msg: "Signed Up!" })
                }

                console.log(err);
                res.status(500).send({ error: "SOMETHING BROKE" })
            })
        })

}

module.exports.create = create;
