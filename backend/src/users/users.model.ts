import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Messages } from 'src/messages/messages.model';

interface UserCretionAttr {
  name: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCretionAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @HasMany(() => Messages)
  messages: Messages[];
}
