// const pool = require("../connections").pool;
// const bcrypt = require("bcrypt")

// function create(req, res) {
//     console.log(req.body)
//     pool.query("SELECT * FROM BaseballStatsTable WHERE email = ?",
//         [req.body.email], (err, querryReturn) => {
//             console.log(err)
//             if (querryReturn[0]) {
//                 return res.send("EMAIL ALREADY EXIST")

//             }
//             let password = bcrypt.hashSync(req.body.password, 5);
//             let email = req.body.email;
//             pool.query("INSERT INTO BaseballStatsTable (firstName, lastName, phone, streetAddress, city, state, zip, email, password) VALUES(?,?,?,?,?,?,?,?,?)", [req.body.firstName, req.body.lastName, req.body.phoneNumber, req.body.streetAddress, req.body.city, req.body.state, req.body.zip, req.body.email, password], (err, result) => {
//                 if (!err) {
//                     return res.send({ msg: "Signed Up!" })
//                 }

//                 console.log(err);
//                 res.status(500).send({ error: "SOMETHING BROKE" })
//             })
//         })

// }
// function getAll(req, res){
//     pool.query("SELECT id, username FROM USER", (err, result)=>{
//         res.send({
//             error: err,
//             users: result
//         })
//     })
// }


// function login(req, res){
//     pool.query("SELECT * FROM BaseballStatsTable WHERE email = ?", [req.body.email], (err, result)=>{
//         if(result[0]){
//             if( bcrypt.compareSync(req.body.password, result[0].password)){
//                 return res.send({message: "Welcome Back!"})
//             }
//             else{
//                 return res.send({error: "Invalid Email or Password"});
//             }
//         }
//         res.send({error: "Invalid Email or Password"})
//     })
// }

// module.exports.getAll = getAll;
// module.exports.login = login;
// module.exports.create = create;



const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    streetAddress: String,
    phoneNumber: String,
    city: String,
    state: String,
    zip: String,
    email: String,
    password: String,
    
})

module.exports = mongoose.model('user', userSchema, 'users')