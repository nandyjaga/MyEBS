var express = require('express');
var mongoose = require('mongoose')
var path = require('path')
var app = express();
app.use('/public', express.static(__dirname + '/public'));

mongoose.connect("mongodb://nandy:nandy@ds061370.mongolab.com:61370/company");

var Schema = new mongoose.Schema(
	{
		email:String,
		name : String,
		age : Number
	}
)

var user = mongoose.model("emp",Schema);

app.get('/getVal', function(req, res){
  res.send('hello world');
});

app.listen(3000);	