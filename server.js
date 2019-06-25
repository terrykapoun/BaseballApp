const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const PORT = 8080;
const customerRoutes = require("./routes/customerRoutes")


app.use(express.static(__dirname + "/dist"))
app.use(bodyParser.json());

app.use("/customers", customerRoutes);

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/*', (req, res) => {
    res.redirect('back')
})

app.listen(PORT);
