const mysql=require("mysql")
let db=mysql.createConnection({
    host:"localhost",user:"root",password:"",database:"nodejsproject"
})
db.connect((err)=>
{
if(err)
{
    console.log("mysql is server error"+err);
}
else{
    console.log("mysql is connected");
}
})
module.exports={db}