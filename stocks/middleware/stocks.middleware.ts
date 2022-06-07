import express from "express";
import stocksService from "../services/stocks.service";
import debug from "debug";

const log: debug.IDebugger = debug("app:stocks-controller");

class StocksMiddleware {}

export default new StocksMiddleware();
