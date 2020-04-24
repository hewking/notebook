import express from "express";

export function bootstrapHttpServer() {
  const app = express();
  const port = 8080;

  // Fix CORS Problem
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/', (req, res) => {
    res.send({
      data: "hello world!"
    });
  });

  app.listen(8080, () => {
    console.log(`🚀 Example app listening at http://localhost:${port}`);
  });

}
