import express, { Express, Request, Response, Application } from "express";
import bodyParser from "body-parser";
import TranslateControllers from "./controllers/translate";
import fileUpload from "express-fileupload";

const app: Application = express();

const port: number = 3060;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.raw());
app.use(fileUpload());

app.get("/", async (req: Request, res: Response) => {
  return await res.send("App is working");
});

app.post("/translate", TranslateControllers.translate);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
