import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

function authMiddleware(req,res, next){
    try{
        const headerAuth = req.headers.authorization;
        if(!headerAuth){
            return res.status(401).json({
                message: "Token is required"
            })
        };

        const parts = token.split(' ')
        if(parts.length !== 2 || parts[0] === 'Bearer'){
              return res.status(401).json({
                message: "Incorrect token/ token must be without bearer"
            })
        };

    const token = parts[1];

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.user = decoded;
    next();

    }catch (error) {
    req.status(403).json({
      message: "Invalid or expired token",
    });
  }
}
export default authMiddleware





