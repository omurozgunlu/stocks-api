import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";

export class StocksRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "StocksRoutes");
  }
  configureRoutes() {
    this.app
      .route(`/users`)
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send(`List of users`);
      });
    return this.app;
  }
}
