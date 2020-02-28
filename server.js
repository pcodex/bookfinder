const express = require('express');
//const osm = require('os');
const exphbs = require('express-handlebars');

const app = express();
app.engine('handlebars',exphbs({
    defaultLayout:'main'
}));

app.set('view engine', 'handlebars');

app.use(express.static('public'));

var port = process.env.PORT || 3005;


/*
app.get('/', (req, res) => {
    res.send("Welcome "+ osm.hostname().toUpperCase() + 
    ".<br>You've been running for "+ osm.uptime() +" secs. <br>You are running "+osm.type()+
    " on the "+osm.platform()+" platform"+" and "+osm.arch()+" architecture" );
})*/

app.get('/', (req,res) => {
    res.render('home.handlebars');
});

app.get('/about', (req,res)=> {
res.render('about');
});

app.get('/contact',(req,res)=> {
res.render('contact');
});

app.listen(port, ()=>{
    console.log("Server is running on port "+port);
});