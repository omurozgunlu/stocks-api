export interface CRUD {
  list: () => Promise<any>;
  readByDate: (date: string) => Promise<any>;
}
