import express, { query } from "express";
import stocksUtils from "../../../../stocks/utils/stocks.utils";

describe("util test", () => {
  let mockRequest: Partial<express.Request>;
  beforeEach(() => {
    mockRequest = {};
  });
  it("returns null when query is empty", () => {
    const result = stocksUtils.sanitizeDateQuery(
      mockRequest as express.Request
    );
    expect(result).toEqual(null);
  });
  it("returns null when date is empty", () => {
    mockRequest["query"] = {};
    const result = stocksUtils.sanitizeDateQuery(
      mockRequest as express.Request
    );
    expect(result).toEqual(null);
  });
  it("happy path", () => {
    mockRequest["query"] = { date: "5-January-2000" };
    const result = stocksUtils.sanitizeDateQuery(
      mockRequest as express.Request
    );
    expect(result).toEqual("5-January-2000");
  });
});
