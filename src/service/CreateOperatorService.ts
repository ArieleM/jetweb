import { getCustomRepository } from "typeorm";
import { OperatorRepositories } from "../repositories/OperatorsRepositories";
class CreateOperatorService {
  async execute({ name }) {
    const operatorRepository = getCustomRepository(OperatorRepositories);

    if (!name) {
      throw new Error("Name incorrect.");
    }

    const operatorAlreadyExists = await operatorRepository.findOne({
      name,
    });

    if (operatorAlreadyExists) {
      throw new Error("Operator already exists.");
    }

    const operator = operatorRepository.create({
      name,
    });

    await operatorRepository.save(operator);

    return operator;
  }
}

export { CreateOperatorService };
