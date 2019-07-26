// const express = require("express");
// let router = express.Router();
// let user = require("../models/customerRegistration");

// router.get("/all", (req, res)=>{
//     user.getAll(req, res);
// })

// router.post("/login", (req, res)=>{
//     user.login(req, res);
// })

// router.post("/signup", (req, res) => {
//     user.create(req, res);

// })

// module.exports = router;

const express = require("express")
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require("../models/customerRegistration")
const mongoose = require('mongoose')
const db = "mongodb+srv://terry:Buttley_500@baseballstatdb-ikut5.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(db, err => {
    if (err) {
        console.error('Error!' + err)
    } else {
        console.log('Connected to mongodb')
    }
})

router.get('/', (req, res) => {
    res.send('From customers route')
})

router.post('/signup', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            let payload = { subject: registeredUser._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
    })


})

router.post('/login', (req, res) => {
    let userData = req.body

    User.findOne({email: userData.email}, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid email')
            } else
            if ( user.password !== userData.password) {
                res.status(401).send('Invalid password')
            } else {
                let payload = { subject: user._id}
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({token})
            }
        }
        
    })
})

module.exports = router