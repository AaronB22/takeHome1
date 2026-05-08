import { allTickets } from "../services/data.js"
export const getAllTickets=(req,res)=>{
    const ticketArr= allTickets();
    res.status(200).json(ticketArr)
}