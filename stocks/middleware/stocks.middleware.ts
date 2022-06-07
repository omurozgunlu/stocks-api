import express from "express";
import stocksService from "../services/stocks.service";
import debug from "debug";

const log: debug.IDebugger = debug("app:stocks-controller");

class StocksMiddleware {
  async validateDateQuery(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (req.query && req.query.date && req.query.date) {
      next();
    } else {
      res.status(400).send({
        error: "Missing query params",
      });
    }
  }
}

export default new StocksMiddleware();
