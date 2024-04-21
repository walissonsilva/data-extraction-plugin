import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { users } from "src/mocks/users";
import { IAuthService } from "src/services/AuthService";

export class AuthController {
  private router: Router;

  constructor(private readonly authService: IAuthService) {
    this.router = Router();
  }

  get routes() {
    this.router.get("/login/:email", (req, res) => {
      const user = users.find((user) => user.email === req.params.email);

      if (user == null) {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .json({ message: "Usuário não encontrado" });
      }

      const token = this.authService.generateToken(user);
      return res.status(StatusCodes.OK).json({ token });
    });

    return this.router;
  }
}
