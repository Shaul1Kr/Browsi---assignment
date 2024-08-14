import { Request, Response } from "express";
import { Domain, Publisher } from "../models";

export const getPublishers = async (req: Request, res: Response) => {
  console.info("Retrive all publisher and domains");
  try {
    const publishers = await Publisher.find().populate("domains").exec();
    res.status(200).json(publishers);
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Error retrieving publishers", error });
  }
};

export const createPublisher = async (req: Request, res: Response) => {
  console.info("Create new publisher");
  try {
    const { publishername } = req.body;
    await Publisher.create({ name: publishername });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating publisher", error });
  }
};
