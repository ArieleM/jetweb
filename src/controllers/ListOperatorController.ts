import { Request, Response } from "express";
import { ListOperatorsServices } from "../service/ListOperatorService";

class ListOperatorController {
  async handle(request: Request, response: Response) {
    const listOperatorsServices = new ListOperatorsServices();

    const operators = await listOperatorsServices.execute();

    return response.status(200).json(operators);
  }
}

export { ListOperatorController };
