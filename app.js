//package dependencies
let express = require('express'),
    bodyParser = require('body-parser');

//file dependencies
let routes = require('./routes/routes.js');

var app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

routes(app);

var server = app.listen(port, () => {
    console.log("The api is running on " + port);
});

// https://www.codementor.io/wapjude/creating-a-simple-rest-api-with-expressjs-in-5min-bbtmk51mq
// https://medium.freecodecamp.org/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2
// https://medium.freecodecamp.org/build-restful-api-with-authentication-under-5-minutes-using-loopback-by-expressjs-no-programming-31231b8472ca