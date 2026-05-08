import { allTickets , ticketById} from "../services/data.js"
export const getAllTickets=(req,res)=>{
    const ticketArr= allTickets();
    res.status(200).json(ticketArr)
}

export const getItcektById=(req,res)=>{

    const ticket= ticketById(req.params.id)
    console.log(ticket)

    if(ticket===null){
        return res.status(404).json({message:`No ticket with id ${req.params.id}`})
    }
    return res.status(200).json(ticket)
}