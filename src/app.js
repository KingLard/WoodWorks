const hbs = require('hbs')
var mysql = require("mysql");
const path = require('path');
const express = require("express");


const app = express();

const port = process.env.PORT || 3000


var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "Bmxrider1",
    database: "woodcarvesite",
    insecureAuth: true
});


//define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public') 
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

//setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))



app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Brett Landes'
    })
})


app.get('/products', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Brett Landes'
    })
})




connection.connect(function(err) {
    if(err) throw err;
    console.log("connected as id: " + connection.threadId);
})




app.listen(port, () => {
    console.log('server listening on port ' + port)
})
