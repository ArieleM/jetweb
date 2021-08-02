import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../repositories/ClientsRepositories";
import { OperatorRepositories } from "../repositories/OperatorsRepositories";

class CreateClientService {
  async execute({ name, birth, value, email, operator }) {
    const clientRepository = getCustomRepository(ClientRepositories);

    const operatorRepository = getCustomRepository(OperatorRepositories);

    const operatorExists = await operatorRepository.findOne(operator);

    if (!operatorExists) {
      throw new Error("Operador não cadastrado.");
    }

    const clientAlreadyExists = await clientRepository.findOne({
      email,
    });

    if (clientAlreadyExists) {
      return;
    }

    const client = clientRepository.create({
      name,
      birth,
      email,
      operator,
      value,
    });

    await clientRepository.save(client);

    return client;
  }
}

export { CreateClientService };
