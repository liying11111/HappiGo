var express = require('express');
var app = express();

app.use(express.static('public'));
app.all('*',function (req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	next();
})

app.get('/Calssify', function (req,res){
  res.sendFile(__dirname+'/20.json');
});

var server = app.listen('3000', function () {
  console.log(server.address().address, server.address().port);
})