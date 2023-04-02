import { Request, Response, NextFunction } from 'express'
// ERROR -> model
import { RouteNotFoundError } from '../Models/ClientErrors'

// middleware function
const ErrorHandler = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const err = new RouteNotFoundError(request.originalUrl)
  next(err)
}
