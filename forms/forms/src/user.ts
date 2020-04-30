export class User {
  constructor(
    public name: string,
    public lastName: string,
    public email: string,
    public phoneNumber: number,
    public difficulty: string,
    public preferedTime: string,
    public subscribe: boolean
  ) {}
}
