import { Request, Response } from "express";
import { Readable } from "stream";

import readline from "readline";
import { CreateClientService } from "../service/CreateClientService";
import { ListOperatorsServices } from "../service/ListOperatorService";

class CreateClientController {
  async handle(request: Request, response: Response) {
    const { file } = request;

    let lines = [];
    let opeComCli = [];

    const listOperatorsServices = new ListOperatorsServices();
    const createClientService = new CreateClientService();

    const operators = await listOperatorsServices.execute();

    if (operators.length === 0) {
      return response
        .status(400)
        .json({ error: "Cadastre um operador primeiro." });
    }

    const readableFile = new Readable();
    readableFile.push(file?.buffer);
    readableFile.push(null);

    const clientsLine = readline.createInterface({
      input: readableFile,
    });

    for await (let line of clientsLine) {
      lines.push(line);
    }
    lines.shift();
    lines.forEach((line, indice) => {
      const index = indice % operators.length;
      const client = line.split(",");

      opeComCli.push({
        name: client[0],
        birth: client[1],
        value: Number(client[2]),
        email: client[3],
        operator: operators[index].id,
      });
    });

    for (const client of opeComCli) {
      await createClientService.execute(client);
    }

    return response.status(200).json({ message: "Arquivo importado." });
  }
}

export { CreateClientController };
