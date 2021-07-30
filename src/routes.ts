import { Router } from "express";
import { CreateOperatorController } from "./controllers/CreateOperatorController";

const router = Router();
const createOperatorController = new CreateOperatorController();

router.post("/operators", createOperatorController.handle);

export { router };
