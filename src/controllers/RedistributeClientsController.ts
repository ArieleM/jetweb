import { Request, Response } from "express";
import { ListClientsServices } from "../service/ListClientsServices";
import { ListOperatorsServices } from "../service/ListOperatorService";
import { UpdateClientService } from "../service/UpdateClientService";

class RedistributeClientsController {
  async handle(_request: Request, response: Response) {
    const listClientsServices = new ListClientsServices();
    const listOperatorsServices = new ListOperatorsServices();
    const updateClientService = new UpdateClientService();
    let opeComCli = [];

    const clients = await listClientsServices.execute();
    const operators = await listOperatorsServices.execute();

    clients.forEach((client, indice) => {
      const index = indice % operators.length;
      opeComCli.push({
        id: client.id,
        name: client.name,
        birth: client.birth,
        value: client.value,
        email: client.email,
        operator: operators[index].id,
      });
    });

    for (const client of opeComCli) {
      await updateClientService.execute(client);
    }

    return response.send();
  }
}
export { RedistributeClientsController };
