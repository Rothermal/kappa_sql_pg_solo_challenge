/**
 * Created by JFCS on 3/15/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var pgRouter = require('./routes/pg');
var app = express();
var port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use(express.static('server/public'));


app.post('/people',pgRouter);
app.get('/people',pgRouter);
app.delete('/people',pgRouter);

app.use('/',index);

var server = app.listen(port,function(){
   var port = server.address().port;
    console.log('now open on port :', port);


});