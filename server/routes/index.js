/**
 * Created by JFCS on 3/15/16.
 */
var express = require('express');
var router = express.Router();
var path = require('path');








router.get('/*',function(request,response){
   var file = request.params[0] || "/views/index.html";
    response.sendFile(path.join(__dirname,"../public/" + file));
});







module.exports = router;