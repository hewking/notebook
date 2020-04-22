import express from "express";

export function bootstrapHttpServer() {
  const app = express();
  const port = 8080;

  app.get('/', (req, res) => {
    res.send({
      data:"hello world!"
    });
  })

  app.listen(8080, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });

}
