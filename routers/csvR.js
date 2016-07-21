	var express		=require('express'); 
 			var app			=express();    
 			var crudR		=express.Router(); 
 			var crudC		=require('./../controllers/csvC.js')();
 			crudR.route('/')
 				.get(crudC.get);
 				
 		module.exports=crudR;