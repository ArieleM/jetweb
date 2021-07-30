import { EntityRepository, Repository } from "typeorm";

import { Operator } from "../entities/Operator";

@EntityRepository(Operator)
class OperatorRepositories extends Repository<Operator> {}

export { OperatorRepositories };
