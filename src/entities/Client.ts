import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  UpdateDateColumn,
} from "typeorm";
import { Operator } from "./Operator";

@Entity("clients")
class Client {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  name: string;

  @Column()
  birth: string;

  @Column()
  value: number;

  @Column()
  email: string;

  @ManyToOne((type) => Operator)
  @JoinColumn({ name: "operator_id", referencedColumnName: "id" })
  operator: Operator;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Client };
