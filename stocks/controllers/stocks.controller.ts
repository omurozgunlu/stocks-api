import express from "express";
import stocksService from "../services/stocks.service";
import debug from "debug";
const log: debug.IDebugger = debug("app:stocks-controller");
class StocksController {
  async listStocks(req: express.Request, res: express.Response) {
    const stocks = await stocksService.list();
    res.status(200).send(stocks);
  }
  async getStockByDate(req: express.Request, res: express.Response) {
    const stock = await stocksService.readByDate("123"); //fix
    return stock;
  }
}
export default new StocksController();
