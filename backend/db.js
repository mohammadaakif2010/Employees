const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost" ,
    user: "root" ,
    password: "" , 
});


 
 db.connect((err)=>{
    if (err){
        console.log("err")
    }
    else{
        db.query("create database students", (err,result)=>{
            if(err){
                console.log("ERR")
            }
            else{
                console.log("emplooyees DATABASE CREATED")
            }
        })
    }
 });