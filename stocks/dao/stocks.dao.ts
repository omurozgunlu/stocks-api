import { StockDTO } from "../dto/stock.dto";
import debug from "debug";

const log: debug.IDebugger = debug("app:in-memory");

class StocksDao {
  stocks: Array<StockDTO> = [];
  constructor() {
    log("Created new instance of StocksDao"); //read json
  }
  async getStockByDate(date: string) {
    return; //implement find by date
  }
  readStocksFile() {
    return; //read file
  }
}
export default new StocksDao();
