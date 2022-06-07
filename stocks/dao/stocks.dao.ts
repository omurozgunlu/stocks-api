import { StockDTO } from "../dto/stock.dto";
import debug from "debug";

const log: debug.IDebugger = debug("app:in-memory");

class StocksDao {
  stocks: Array<StockDTO> = [];
  constructor() {
    log("Created new instance of StocksDao"); //read json
  }
}
export default new StocksDao();
