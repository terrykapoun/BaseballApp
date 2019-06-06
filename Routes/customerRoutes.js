const express = require("express");
let router = express.Router();
let user = require("../models/customerRegistration");



router.post("/signup", (req, res) => {
    user.create(req, res);

})

module.exports = router;