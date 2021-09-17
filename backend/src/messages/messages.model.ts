import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';

interface MessageCretionAttr {
  value: number;
  operation: string;
  masterId: number;
}

@Table({ tableName: 'messages' })
export class Messages extends Model<Messages, MessageCretionAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  value: number;

  @Column({ type: DataType.STRING })
  operation: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  masterId: number;

  @Column({ type: DataType.INTEGER })
  parentId: number;

  @BelongsTo(() => User)
  master: User;
}
