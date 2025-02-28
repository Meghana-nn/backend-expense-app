const jwt=require('jsonwebtoken')

const authenticateUser=(req,res,next)=>{
    const token=req.headers['authorization']
    if(token){
        try{
            const tokenData=jwt.verify(token,process.env.JWT_SECRET)
            next()
        }
        catch(e){
            res.status(400).json(e)
        }
    } else{
        res.status(401).json({error:'token is required'})
    }
}
module.exports=authenticateUser