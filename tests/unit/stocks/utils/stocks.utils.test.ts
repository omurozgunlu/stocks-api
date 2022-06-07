import express from "express";
import stocksUtils from "../../../../stocks/utils/stocks.utils";

describe("util test", () => {
  it("returns null when query is empty", () => {
    let req: express.Request = null;
    const result = stocksUtils.sanitizeDateQuery(req);
  });
});
