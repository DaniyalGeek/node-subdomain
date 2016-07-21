# node-subdomain
Simple way to create subdomains in Node JS using express

`npm install`
install all packages


Run: `npm start`
from main directory 


This is running on port 3000
currently working with 3 urls 
1. Default:       localhost:3000/
2. Test1:         test1.localhost:3000/
3. Test2:         test2.localhost:3000/


`Middleware is working to check and make req.url again 
app.get('*', function(req, res, next){
    if (req.headers.host == 'test1.localhost:3000') { //Port is important if the url has it
        req.url = '/test1' + req.url;
    }
    else if(req.headers.host == 'test2.localhost:3000') {
        req.url = '/test2' + req.url;
    }  
    next();
});`


These are all subdomains 

`app.get('/', function(req,res){
  //Default case, no subdomain
  console.log("i am Default");
  res.send("i am default");

})

app.get('/test1', function(){
   //test1 subdomain
   console.log("i am test1");
   res.send("i am test1");
})

app.get('/test2', function(){
   //test2 subdomain
   console.log("i am sellers");
   res.send("i am test2");
})`
