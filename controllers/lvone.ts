import { Response,Request } from "express"
const lvone = {
    sum : (req:Request, res:Response) => {
    try {
        const {a,b} = req.body
        
        let kq = parseInt(a)+parseInt(b) 
        
    res.status(200).json(kq)
    } catch (error) {
        res.status(500).json(error)
    }
    
},
}

export default lvone