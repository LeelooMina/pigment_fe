export class Post {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public user_id: number,
    public username: string,
  ) {}
}
