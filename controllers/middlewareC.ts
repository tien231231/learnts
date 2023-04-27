import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express";

interface AuthenticatedRequest extends Request {
  user?: any;
}

const middlewareC = {
  verifyToken: (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) => {
    const token = req.headers.token;
    if (typeof(token)==="string") {
      const accessToken: string = token.split(" ")[1];
      jwt.verify(
        accessToken,
        process.env.JWT_ACCESS_TOKKEN as string, // Cast to string
        (err, user) => {
          if (err) {
            return res.status(403).json("token is not valid");
          }
          req.user = user;
          next(); // Đi tiếp
          console.log(user);
        }
      );
    } else {
      return res.status(401).json("you are not authenticated");
    }
  },
};

export default middlewareC;
