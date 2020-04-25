import express from "express";
import { getDbContext } from "../reposiories/common/dbContext";
// import NoteEntity from "../models/db/note";
// import * as NoteService from "../services/notebook/noteService";
// import { getDbContext } from "../reposiories/common/dbContext";


const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');


// (async () => {
//   NoteEntity.create({
//     id:11,
//     date:new Date(),
//     title:'mynote',
//     content:'note content',
//   });
// })();

// (async () => {
//   getDbContext()?.addModels([NoteEntity]);
// })();

export function bootstrapHttpServer() {
  const app = express();
  const port = 8080;

  const User = getDbContext()!.define('User', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
  });
  
  // `sequelize.define` also returns the model
  console.log(User ===  getDbContext()!.models.User); // true
  
  (User as any).create({
    firstName:"zhangsan",
    lastName:"lisi",
  }).then(p => {
    
  });

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

  // app.get('/createNote', async (req, res) => {
  //   const note = {
  //     date: Date.now(),
  //     title: req.query.title,
  //     content: req.query.content,
  //   };
  //   await NoteService.createNote(note as any);
  //   res.send({
  //     code: 0,
  //     result: 'ok',
  //   });
  // });

  // app.get('/getAllNotes', async (req, res) => {
  //   const notes = await NoteService.getAllNotes();
  //   res.send({
  //     code: 0,
  //     data: notes,
  //   });
  // });

  app.listen(8080, () => {
    console.log(`🚀 Example app listening at http://localhost:${port}`);
  });

}
