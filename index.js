var express = require('express');
var app = express();


app.get('*', function(req, res, next){
    if (req.headers.host == 'test1.localhost:3000') { //Port is important if the url has it
        req.url = '/test1' + req.url;
    }
    else if(req.headers.host == 'test2.localhost:3000') {
        req.url = '/test2' + req.url;
    }  
    next();
});
app.get('/', function(req,res){
  //Default case, no subdomain
  console.log("i am Default");
  res.send("i am default");

})

app.get('/test1', function(){
   //Buyers subdomain
   console.log("i am test1");
   res.send("i am test1");
})

app.get('/test2', function(){
   //Sellers subdomain
   console.log("i am sellers");
   res.send("i am test2");
})
							
 module.exports = app;



