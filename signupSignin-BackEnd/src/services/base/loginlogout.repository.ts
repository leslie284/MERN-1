export interface LoginLogoutInterface<T> {
  findByEmail(email: string): Promise<T | null>
  registerUser(model: T): Promise<T | null>
}
