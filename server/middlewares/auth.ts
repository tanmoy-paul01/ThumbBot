import { Request, Response, NextFunction } from "express";

const protect = async ( req: Request, res: Response, next: NextFunction ) => {
    console.log("SESSION DATA:", req.session);

    const { isLoggedIn, userId } = req.session as any;

    if (!isLoggedIn || !userId) {
        return res.status(401).json({
        message: "You are not logged in",
        });
    }

    next();
};

export default protect;
