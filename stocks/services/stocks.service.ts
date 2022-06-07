import StocksDao from "../dao/stocks.dao";
import { CRUD } from "../../common/CRUD/interfaces/crud.interface";
import { StockDTO } from "../dto/stock.dto";

class StocksService implements CRUD {
  async list() {
    return StocksDao.getAllStocks();
  }
  async readByDate(date: string) {
    return StocksDao.getStockByDate(date);
  }
}
export default new StocksService();
