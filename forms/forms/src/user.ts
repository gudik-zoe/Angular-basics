export class User {
  constructor(
    public name: string,
    public lastName: string,
    public email: string,
    public phoneNumber: number,
    public difficulty: 'default',
    public preferedTime: string,
    public subscribe: boolean
  ) {}
}
