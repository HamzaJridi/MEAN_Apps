var express = require('express');
var router = express.Router();
//var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
/*app.get('/', function(req, res, next){
    return res.sendfile(app.get('public') + 'html/index.html');
});*/

module.exports = router;
