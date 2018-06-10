var compression = require('compression');
var express = require('express');
const path = require("path");
var router = express.Router();
var app = express();

// compress all requests
app.use(compression());

// add all routes
// router.get('*',(req,res) => {
//   res.write('<h1>Hello World</h1>');
// });

app.use(express.static(path.join(__dirname, "static")));

app.use('/',router);
app.listen(process.env.PORT || 3000);