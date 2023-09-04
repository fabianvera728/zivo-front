export interface User {
  user: {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    profile: {
      id: number;
      created: string;
      modified: string;
      avatar: string;
      user: string;
      status: number;
      technology: number;
      rol: number;
    };
  };
  access_token: string;
}
