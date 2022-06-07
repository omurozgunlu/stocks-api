import express from "express";
import stocksService from "../services/stocks.service";
import stocksUtils from "../utils/stocks.utils";
import debug from "debug";
const log: debug.IDebugger = debug("app:stocks-controller");
class StocksController {
  async getStockByDate(req: express.Request, res: express.Response) {
    const date = stocksUtils.sanitizeDateQuery(req);
    let stock;
    if (date === null)
      res.status(400).send({
        error: "incorrect date parameter",
      });
    else {
      stock = await stocksService.readByDate(date);
    }

    res.status(200).send(stock);
  }
}
export default new StocksController();
