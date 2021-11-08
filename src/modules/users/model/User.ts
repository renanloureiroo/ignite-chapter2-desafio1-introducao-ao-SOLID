import { v4 as uuidV4 } from 'uuid';

class User {
  id?: string;
  name: string;
  email: string;
  created_at: Date;
  admin?: boolean;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.admin = false;
    }
  }
}

export { User };
