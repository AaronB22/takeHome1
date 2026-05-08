import { Router } from "express";
import * as ctl from "../controllers/ticket.controller.js";

export const router = Router();

router.get("/tickets", ctl.getAllTickets)

export default router;