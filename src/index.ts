import express, { Express, Request, Response, Application } from "express";
import bodyParser from "body-parser";
import TranslateControllers from "./controllers/translate";
import fileUpload from "express-fileupload";
import path from "path";

const app: Application = express();

const port: number = 3060;

app.use(express.static(path.join(__dirname, "/pages")));
app.set("views", path.join(__dirname, "pages"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.raw());
app.use(fileUpload());

app.get("/", async (req: Request, res: Response) => {
  console.log("aaaaaaaaaaaaaa: ", path.join(__dirname + "/index"));
  return res.render("index");
});

app.post("/translate", TranslateControllers.translate);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
