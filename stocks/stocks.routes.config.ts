import { CommonRoutesConfig } from "../common/common.routes.config";
import stocksController from "./controllers/stocks.controller";
import stocksMiddleware from "./middleware/stocks.middleware";
import express from "express";

export class StocksRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "StocksRoutes");
  }
  configureRoutes() {
    this.app
      .route(`/stocks`)
      .get(stocksMiddleware.validateDateQuery, stocksController.getStockByDate);
    return this.app;
  }
}
