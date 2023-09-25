import { Request, Response } from "express";
import JSONParserServices from "../service/translate";

const translate = async (req: Request, res: Response) => {
  if (req.files) {
    const file: any = req.files.file;
    const data = await JSONParserServices.JSONparser(file);
    return res.status(200).json(data);
  }
};

const TranslateControllers = {
  translate,
};

export default TranslateControllers;
