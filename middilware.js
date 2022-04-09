const abc=(req,res,next)=>
{
console.log("i am developer");
if(false)
{
    return res.send("not authenticated user")
}
next()
}
module.exports={abc}