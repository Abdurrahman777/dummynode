const{db}=require('./confique')
const getcontroller=(req,res)=>
{
 let query=`select * from user `

 db.query(query,(err,data)=>
 {
    if(err)
    {
        return res.send({status:400,msg:"error",error:err})
    }
    else{
        return res.send({status:200,msg:"success",data:data})
    }
 })
}

const postcontroller=(req,res)=>
{
    console.log(req.body)
    let {name,age,salary}=req.body
      let query=`insert into  user( name,age,salary) values("${name}",${age},${salary})`
  
      db.query(query,(err,data)=>
   {
       if(err)
       {
           return res.send({status:400,msg:"error",error:err})
       }
       else{
           return res.send({status:200,msg:"success",data:data})
       }
   })
}


// const getspecific=(req,res)=>
// {
//     let {id}=req.query
//    let query=`select * from user where id= ${id}`
//    console.log(query);
//    db.connect(query,(err,data)=>
//    {
//        if(err)
//         {
//             console.log("err")
//           res.send({status:400,msg:"error",error:err})
//         }
//         else
//         {
//             console.log("data");
//         return res.send(data)
//         }

//    })    
// }

 const getspecific=(req,res)=>
 {
      let id=req.query.id
  let query=`select * from user where id=${id}`
  db.query(query,(err,data)=>
  {
     if(err)
     {
         return res.send({status:400,msg:"error",error:err})
     }
     else{
        if(data.length == 0 )
        {
            return res.status(404).send({status:404,msg : "no daa found"})   
        }


         return res.send({status:200,msg:"success",data:data})
     }
  })
 }
const deletecontroller=(req,res)=>
{
    let id=req.query.id
    let query=`delete from user where id=${id}`
    db.query(query,(err,data)=>
    {
        if(err)
        {
            return res.send({status:400,msg:"error",error:err})
        }
        else{
            return res.send({status:200,msg:"sucess"})
        }
    })
} 
const updatecontroller=(req,res)=>
{
    console.log(req.body)
    let id=req.query.id
    let name=req.body.name
    let age=req.body.age
     let query

    if(name && age)
    {
        query=`update user set name ='${name}',age=${age} where id=${id}`
    }
    if(name)
    {
        query=`update user set name='${name}' where id=${id}`
    }
    if(age)
    {
        query=`update user set age=${age} where id=${id}`
    }
    db.query(query,(err,data)=>
        {
         if(err)
         {
             return res.send({status:400,msg:"error",error:err})
         }
         else{
             return res.send({status:200,msg:"success",data:data})
         }          
        })

    }

       const paggination=(req,res)=>
       {
          let limit=req.body.limit
          let offset=req.body.offset
           let query=`select * from user limit ${limit} offset ${offset-1}`
           console.log(limit);
           console.log(offset)
           db.query(query,(err,data)=>
           {
               if(err)
               {
                   return res.send({status:0,messege:"error",error:err})
               }
                else{    
                    return res.send({status:1,messge:"success",data:data})
                }
             })


       }


module.exports={getcontroller,postcontroller,getspecific,deletecontroller,updatecontroller,paggination}
