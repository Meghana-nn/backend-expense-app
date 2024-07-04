const jwt=require('jsonwebtoken')
const usersCltr={}

usersCltr.login=(req,res)=>{
    const body =req.body
    if(body.email==process.env.EMAIL && body.password==process.env.PASSWORD){
        const tokenData={id:process.env.ID}
        const token=jwt.sign(tokenData,process.env.JWT_SECRET,{expiresIn:'1d'})
        res.json({token:token})
    }
    else{
        res.status(401).json({
            notice:'invalid password/email'
        })

    }
}
module.exports=usersCltr 
