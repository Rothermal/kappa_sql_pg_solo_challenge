/**
 * Created by JFCS on 3/15/16.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/kappa_notes_data';

router.get('/people',function(request,response){
    //var name = request.body.name;
    //var address = request.body.address;

    pg.connect(connectionString,function(err,client,done){
        if(err){
            done();
            console.log("error connecting to database",err);
            response.status(500).send(err);
        } else{
            var results = [];
            var query = client.query("SELECT * FROM people");
        }
        query.on('row',function(row){
            console.log(row);
            results.push(row);
        });
        query.on('end',function(){
            done();
            response.send(results);
        });
        query.on('error',function(error){
            console.log('Error returning query', error);
            done();
            response.status(500).send(error);
        });
    });
});


router.post('/people',function(request,response){
    var name = request.body.name;
    var address = request.body.address;
    var city = request.body.city;
    var state = request.body.state;
    var zip = request.body.zip;

    pg.connect(connectionString,function(err,client,done){
        if(err){
            done();
            console.log("error connecting to database",err);
            response.status(500).send(err);
        } else{
            var results = [];
            var query = client.query("INSERT INTO people (name,address,city,state,zip_code) VALUES ($1,$2,$3,$4,$5) RETURNING id, name, address, city, state, zip_code",[name,address,city,state,zip]);
             }
             query.on('row',function(row){
                 console.log(row);
                 results.push(row);
             });
             query.on('end',function(){
                 done();
                response.send(results);
             });
             query.on('error',function(error){
                 console.log('Error returning query', error);
                 done();
                 response.status(500).send(error);
             });
    });
 });





module.exports = router;