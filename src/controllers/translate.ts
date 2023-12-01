import { Request, Response } from "express";
import path from "path";
import JSONParserServices from "../service/translate";

const translate = async (req: Request, res: Response) => {
  if (req.files && req.body.quantity) {
    const file: any = req.files.file;
    const quantity: number = req.body.quantity;
    const data = await JSONParserServices.JSONparser(quantity, file);
    return res.status(200).render("components/result", { data });
  } else {
    return res.status(400).json({
      message: "error!",
      data: null,
    });
  }
};

const TranslateControllers = {
  translate,
};

export default TranslateControllers;
