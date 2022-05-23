import "reflect-metadata"
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { AppDataSource } from "./data-source"
import { Article } from "./entity/Article"

AppDataSource.initialize().then(async () => {

    console.log("Loading articles from the database...")
    const articles = await AppDataSource.manager.find(Article)
    console.log("Loaded users: ", articles)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))


const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

dotenv.config();

app.get('/api', (_, response: Response) => {
  response.send('hello express');
})

app.get('/api/articles', async (_, res: Response) => {
  // const articles = await AppDataSource.getRepository(Article).find();
  const articles = await AppDataSource.manager.find(Article)
  res.json(articles);
})

app.get('/api/articles/:id', async (req: Request, res: Response) => {
  const article = await AppDataSource.getRepository(Article).findOneBy({
    id: Number(req.params.id),
  })
  if (!article) res.sendStatus(400)
  res.json(article);
})

app.post("/api/articles", async (req: Request, res: Response) => {
  console.log(req.body)
  if(!req.body) {
    return res.sendStatus(400);
  }
  const article = await AppDataSource.getRepository(Article).create(req.body)
  const results = await AppDataSource.getRepository(Article).save(article)
  return res.send(results);
})

app.put("/api/articles/:id", async (req: Request, res: Response) => {
  const article = await AppDataSource.getRepository(Article).findOneBy({
    id: Number(req.params.id)
  })
  if (!article) {
    res.sendStatus(404)
    return;
  }
  const newArticle = {
    title: req.body.title,
    body: req.body.body,
    thumbnailPath: req.body.thumbnailPath,
    isDist: req.body.isDist
  }
  AppDataSource.getRepository(Article).merge(article, newArticle)
  const results = await AppDataSource.getRepository(Article).save(article)
  return res.send(results)
})

app.delete("/api/articles/:id", async (req: Request, res: Response) =>{
  const results = await AppDataSource.getRepository(Article).delete(req.params.id)
  return res.send(results)
})

export default app;
