import { Router } from "express";
import * as ctl from "../controllers/ticket.controller.js";

export const router = Router();

router.get("/tickets", ctl.getAllTickets)
router.get("/:id", ctl.getItcektById)

export default router;