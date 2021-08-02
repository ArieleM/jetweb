import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../repositories/ClientsRepositories";

class UpdateClientService {
  async execute({ id, operator }) {
    const clientRepository = getCustomRepository(ClientRepositories);

    const clientAlreadyExists = await clientRepository.save({
      id,
      operator,
    });

    return clientAlreadyExists;
  }
}

export { UpdateClientService };
