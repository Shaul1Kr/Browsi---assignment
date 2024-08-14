import { Request, Response } from "express";
import { Domain, Publisher } from "../models";

export const getDomains = async (req: Request, res: Response) => {
  console.info("Retrive all publisher and domains");
  try {
    const domains = await Domain.find().populate("publisher");
    res.status(200).json(domains);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving domain", error });
  }
};
