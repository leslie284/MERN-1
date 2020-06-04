export interface User {
  email: string;
  password: string;
  name?: string;
}

export interface AuthenticationState {
  user: User;
  loggedIn: boolean;
  logginIn: boolean;
}

export interface RegistrationState {
  registering: boolean;
}
