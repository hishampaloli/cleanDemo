import { Request, Response, NextFunction } from "express";
import { CommonResponse, ResponseError } from "./Response";
export = (err: any, req: Request, res: Response, next: NextFunction) => {
  const error = new ResponseError({
    status: err.status || 500,
    msg: err.message || err.msg || "No message",
    reason: err.reason || err.stack || "Somebody failed",
    url: req.originalUrl,
    ip: req.ip,
    validationErrors: [],
  });

  res.status(error.status);
  res.json(new CommonResponse({ status: false, error }));
};
