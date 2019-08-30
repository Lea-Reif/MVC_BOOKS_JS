 const express =require('express');
const morgan = require('morgan');
 const path=require('path');
 const mysql=require('mysql');
 const mycon = require('express-myconnection');
 const app = express();
//importando rutas

const booksRoutes= require('./Routes/books');



 //express setting

 app.set('port',process.env.PORT|| 1811);
 app.set('view engine', 'ejs');
 app.set('views', path.join(__dirname,'/views'));


 //middlewares

app.use(morgan('dev'));

app.use(mycon(  mysql,{
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database:  'crudnode'
},'single'));

app.use(express.urlencoded({extended:false}));
 ///routes

app.use('/',booksRoutes)


//static files

app.use(express.static(path.join(__dirname,'/public')));



 //starting server
 console.log(app.get('views'));
 app.listen(app.get('port'),()=>{
     console.log('server on port: 1811');
 });


