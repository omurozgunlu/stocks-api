import express from "express";

class StocksUtils {
  sanitizeDateQuery(req: express.Request) {
    let queryParam = req.query && req.query.date ? req.query.date : null;
    if (queryParam) {
      queryParam = queryParam.toString(); // if queryParam exists, convert it to string
    } else {
      return null;
    }
    const [day, month, year] = queryParam.split("-");
    const dayNum = parseInt(day);
    const monthNum = parseInt(month);
    const yearNum = parseInt(year);
    if (
      dayNum > 0 &&
      dayNum < 31 &&
      monthNum > 0 &&
      monthNum < 12 &&
      yearNum > 1900 &&
      yearNum < 2100
    ) {
      return queryParam;
    } else return null;
  }
}
export default new StocksUtils();
