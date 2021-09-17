import { IsString, Length } from 'class-validator';

export class createUserDto {
  @IsString({ message: 'Имя должно быть строкой' })
  readonly name: string;
  @IsString({ message: 'Пароль должен быть строкой' })
  @Length(5, 15, {
    message: 'Пароль должен быть не короче 5 и не длиннее 15 символов',
  })
  readonly password: string;
}
