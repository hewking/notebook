import { bootstrapHttpServer } from "./httpServer";
import { buildDbConnection } from "../reposiories/common/dbContext";

(async () => {
  buildDbConnection();
  bootstrapHttpServer();
})();
