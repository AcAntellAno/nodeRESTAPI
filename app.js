//package dependencies
let express = require('express'),
    bodyParser = require('body-parser');

//file dependencies
let routes = require('./routes/routes.js');

var app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

routes(app);

var server = app.listen(port, () => {
    console.log("The api is running on " + port);
});