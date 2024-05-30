const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const port = 8080;

const db = mysql.createConnection({
    host: "localhost" ,
    user: "root" ,
    password: "" ,
    database: "employees" ,
});

db.connect((err)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log("Conected to database")
    }
})
app.get("/company",(req, res)=>{
    const sqlselect = "select * from employee"
    db.query(sqlselect, (err,result)=>{
        res.send(result);
        console.log(result)
    })
})

app.post("/company",(req,res)=>{
    const id = req.body.E_Id;
    const name = req.body.E_Name;
    const age = req.body.E_Age;
    const salary = req.body.E_Salary;
    const gender = req.body.E_Gender;
    const sqlInsert="Insert into employee (E_Id, E_Name, E_Age, E_Salary, E_Gender) values(?,?,?,?,?)";
    db.query(sqlInsert,
    [id, name, age, salary, gender],
    (err,result)=>{
        res.send(result);
    }
    )
})
app.listen(8080, ()=>{
    console.log("connected")
})