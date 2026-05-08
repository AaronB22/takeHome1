import app from './app.js';
import dotenv from 'dotenv';
import {router as ticketRouter} from './routers/ticket.routes.js'

//read environment variables
dotenv.config();

app.get("/health/status",(req,res)=>{
    res.status(200).json({
        ok: true,
        service: "Support Ticket Api"
    })
})

app.use('/api/ticket', ticketRouter)
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})