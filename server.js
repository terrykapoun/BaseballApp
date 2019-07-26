// const bodyParser = require("body-parser");
// const express = require('express');
// const app = express();
// const PORT = 3000;
// const customerRoutes = require("./routes/customerRoutes")


// app.use(express.static(__dirname + "/dist/baseballStatApp"))
// app.use(bodyParser.json());

// app.use("/customers", customerRoutes);

// app.get('/', (req, res) => {
//     res.send("Hello World")
// })

// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/dist/baseballStatApp/index.html')

// app.get('/*', (req, res) => {
//     res.redirect('back')
// })

// app.listen(3000);



const express = require('express')
const bodyParser = require('body-parser')

const Port = 3000
const customerRoutes = require('./routes/customerRoutes')
const app = express()

app.use(express.static(__dirname + "/dist/baseballStatApp"))
app.use(bodyParser.json())

app.use('/customers', customerRoutes);
app.get('/', function (req, res) {
    res.send('Hello from server');
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/baseballStatApp/index.html');
    app.get('/*', (req, res) => {
           res.redirect('back')
         })
   
})
    app.listen(Port, function () {
        console.log('Server running on localhost:' + Port);
    });


    