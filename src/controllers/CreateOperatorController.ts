import { Request, Response } from "express";
import { CreateOperatorService } from "../service/CreateOperatorService";

class CreateOperatorController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const createOperatorService = new CreateOperatorService();

    const operator = await createOperatorService.execute({
      name,
    });

    return response.json(operator);
  }
}

export { CreateOperatorController };
