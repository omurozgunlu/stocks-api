export interface CRUD {
  readByDate: (date: string) => Promise<any>;
}
