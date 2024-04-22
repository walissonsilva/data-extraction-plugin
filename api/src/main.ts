import "dotenv/config";
import { env } from "./env";
import { app } from "./express";

app.listen(env.Port, () => {
  console.log(`Server started on port ${env.Port}`);
});
