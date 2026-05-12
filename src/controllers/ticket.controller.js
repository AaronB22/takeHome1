import { allTickets , ticketById} from "../services/ticket.service.js"
export const getAllTickets=(req,res)=>{
    const ticketArr= allTickets(req.query);
    res.status(200).json(ticketArr)
}

export const getTicektById=(req,res)=>{

    const ticket= ticketById(req.params.id)
  

    if(ticket===null){
        return res.status(404).json({message:`No ticket with id ${req.params.id}`})
    }
    return res.status(200).json(ticket)
}

export const getTags=(req,res)=>{
    const ticket = ticketById(req.params.id)
    if(!ticket){
        res.status(404).json({
            message:`No ticket with id ${req.params.id}`
        })
    }
    else{
        res.status(200).json(ticket.tags)
    }
}