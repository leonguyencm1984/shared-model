import { User } from '../../../entities/user.entity';

export type LoginResponseType = Readonly<{
  token: string;
  user: User;
}>;
