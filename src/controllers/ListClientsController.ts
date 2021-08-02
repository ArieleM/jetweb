import { Request, Response } from "express";
import { ListClientsServices } from "../service/ListClientsServices";

class ListClientsController {
  async handle(request: Request, response: Response) {
    const listClientsServices = new ListClientsServices();

    const clients = await listClientsServices.execute();

    return response.json(clients);
  }
}

export { ListClientsController };
