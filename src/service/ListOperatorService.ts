import { getCustomRepository } from "typeorm";
import { OperatorRepositories } from "../repositories/OperatorsRepositories";

class ListOperatorsServices {
  async execute() {
    const OperatorsRepositories = getCustomRepository(OperatorRepositories);

    const operators = await OperatorsRepositories.find();

    return operators;
  }
}

export { ListOperatorsServices };
