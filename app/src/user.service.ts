import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private username: string;

  getUsername(): string {
    return this.username;
  }

  setUsername(username: string): void {
    this.username = username;
  }
}
