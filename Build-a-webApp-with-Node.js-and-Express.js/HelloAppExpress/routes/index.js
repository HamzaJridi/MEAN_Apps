/**
 * Created by hamzajridi on 21/04/16.
 */

/** when the app gets a request that points to
 * the home page, the we'll execute a function that
 * send as a response 'Hello Express'*/

//Adding routes
exports.index =  function(req, res){
    res.render('default', {
        title : 'Home',
        classname : 'home',
        users : ["hamza", "bilel", "yassin", "nihel"]
    });
};

exports.about = function(req, res){
    res.render('default', {
        title : 'About Us',
        classname : 'about',
    });
};