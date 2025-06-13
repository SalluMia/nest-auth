import { Exclude } from 'class-transformer';

export class User {
  id: number;
  email: string;
  username: string;
  
  @Exclude()
  password: string;

  firstName?: string | null;
  lastName?: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}