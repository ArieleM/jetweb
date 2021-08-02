import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../repositories/ClientsRepositories";

class ListClientsServices {
  async execute() {
    const clientsRepositories = getCustomRepository(ClientRepositories);

    const clients = await clientsRepositories.find();

    return clients;
  }
}

export { ListClientsServices };
