import express from "express";
import NoteEntity from "../models/db/note";
import * as NoteService from "../services/notebook/noteService";
import { getDbContext } from "../reposiories/common/dbContext";


export function bootstrapHttpServer() {
  const app = express();
  const port = 8080;

  // Fix CORS Problem
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use((req, res, next) => {
    const start = Date.now();
    next();
    const end = Date.now();
    console.log(`execute time : ${end - start}`);
  });

  app.get('/', (req, res) => {
    res.send("<h1>Index</h1>");
  });

  app.get('/createNote', async (req, res) => {
    const note = {
      date: Date.now(),
      title: req.query.title,
      content: req.query.content,
    };
    await NoteService.createNote(note as any);
    res.send({
      code: 0,
      result: 'ok',
    });
  });

  app.get('/getAllNotes', async (req, res) => {
    const notes = await NoteService.getAllNotes();
    res.send({
      code: 0,
      data: notes,
    });
  });

  app.listen(8080, () => {
    console.log(`🚀 Example app listening at http://localhost:${port}`);
  });

}
