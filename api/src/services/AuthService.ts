import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import { env } from "src/env";
import { User } from "src/models/User";

export type IAuthService = {
  generateToken: (user: User) => string;
  verifyToken: (req: Request, res: Response, next: NextFunction) => void;
};

export class AuthService {
  private readonly jwtSecret: string;
  private usersToken: Record<string, string> = {};

  constructor() {
    this.jwtSecret = env.Authentication.Secret;
  }

  generateToken(user: User): string {
    if (this.usersToken[user.id]) {
      jwt.verify(this.usersToken[user.id], this.jwtSecret, (err) => {
        if (!err) {
          return this.usersToken[user.id];
        }
      });
    }

    const token = jwt.sign({ userId: user.id }, this.jwtSecret, {
      expiresIn: env.Authentication.Expiration,
    });

    return (this.usersToken[user.id] = token);
  }

  verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const userToken = req.headers.authorization?.split(" ")[1];
    if (!userToken) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Token não fornecido" });
    }

    jwt.verify(userToken, this.jwtSecret, (err, decoded) => {
      if (err) {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .json({ message: "Token inválido" });
      }
      req.body.userId = (decoded as { userId: string }).userId;

      next();
    });
  };
}
