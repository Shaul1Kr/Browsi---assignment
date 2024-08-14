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

export const updatePublisher = async (req: Request, res: Response) => {
  console.info("Updating publisher");
  try {
    const publisherId = req.params.id;
    const name = req.body.name;
    const publisher = await Publisher.findById(publisherId);
    if (!publisher) {
      return res.status(404).json({ message: "Publisher not found" });
    }
    publisher.updateOne({ _id: publisherId }, { name });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating publisher", error });
  }
};

export const deletePublisher = async (req: Request, res: Response) => {
  console.info("Delete publisher");
  try {
    const publisherId = req.params.id;
    const publisher = await Publisher.findById(publisherId);
    if (!publisher) {
      return res.status(404).json({ message: "Publisher not found" });
    }
    await Domain.deleteMany({ _id: { $in: publisher.domains } });
    await Publisher.findByIdAndDelete(publisherId);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting publisher", error });
  }
};
