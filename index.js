const express= require("express")
const app=express()
app.use(express.json())
const {abc}=require('./middilware')
const apis=require('./router')


//this is for middilware
app.use(abc)

//this is for router
app.use('/v1',apis)

//this is for create server
app.listen(3000,(err)=>{
    if(err)
    {
        console.log("server error"+err);
    }
    else{
        console.log("server connected");
    }
})