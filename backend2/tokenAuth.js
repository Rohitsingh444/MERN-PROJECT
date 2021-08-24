var jwt = require('jsonwebtoken');

module.exports=(req,res,next)=>{
    console.log(req.headers.token)
    try{
        var token=req.headers.authorization.split(" ")[1];
        console.log(token)
        var decode = jwt.verify(token,'secret');
        req.userData=decode;
        next();
    }
    catch(e){
        res.status(401).json({
            e:"Invalid token"
        });

    }
    
    
}