import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken';

export const getDataToken = async (req) => {
    try {
        const token = req.cookies.get("token")?.value || "";
        console.log(token);
        
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decodedToken);
        return decodedToken.userId

    } catch (error) {
        throw new Error(error.message)
        
    }
}