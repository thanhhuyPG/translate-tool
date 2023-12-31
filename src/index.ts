import express, { Express, Request, Response, Application } from "express";
import bodyParser from "body-parser";
import TranslateControllers from "./controllers/translate";
import fileUpload from "express-fileupload";
import path from "path";

const app: Application = express();

app.use(express.static(path.join(__dirname, "/pages")));
app.set("views", path.join(__dirname, "pages"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.raw());
app.use(fileUpload());

app.get("/", async (req: Request, res: Response) => {
  return res.render("index");
});

app.post("/translate", TranslateControllers.translate);

app.listen(3060, () => {
  console.log("Server is running at http://localhost:3060");
});
