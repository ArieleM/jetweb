import { Router } from "express";
import multer from "multer";
import { CreateOperatorController } from "./controllers/CreateOperatorController";
import { CreateClientController } from "./controllers/CreateClientController";
import { ListOperatorController } from "./controllers/ListOperatorController";
import { ListClientsController } from "./controllers/ListClientsController";
import { RedistributeClientsController } from "./controllers/RedistributeClientsController";

const router = Router();
const createOperatorController = new CreateOperatorController();
const createClientController = new CreateClientController();
const listOperatorController = new ListOperatorController();
const listClientsController = new ListClientsController();
const redistributeClientsController = new RedistributeClientsController();

const multerConfig = multer();

router.post("/operators", createOperatorController.handle);
router.get("/operators", listOperatorController.handle);
router.post(
  "/upload",
  multerConfig.single("file"),
  createClientController.handle
);
router.get("/clients", listClientsController.handle);
router.get("/redistribute", redistributeClientsController.handle);

export { router };
