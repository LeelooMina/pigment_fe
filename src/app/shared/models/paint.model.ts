export class Paint {
  constructor(
    public id: number,
    public brand: string,
    public name: string,
    public transparent: string,
    public lightfast: string,
    public staining: string,
    public granulating: string,
    public available: boolean,
    public created_at: Date,
    public updated_at: Date,
    public pigment?: any,
    public color_family_id?: number,
    ...res: any[]
  ) {}
}
