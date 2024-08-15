import { Request, Response } from "express";
import { Domain, Publisher } from "../models";

export const getDomains = async (req: Request, res: Response) => {
  console.info("Retrive all publisher and domains");
  try {
    const domains = await Domain.find().populate("publisher");
    return res.status(200).json(domains);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving domain", error });
  }
};

export const createDomain = async (req: Request, res: Response) => {
  console.info("Creating new domain");
  try {
    const { domain, desktopAds, mobileAds, publisherId } = req.body;

    if (!domain || !publisherId) {
      console.error("Domain name and publisher ID are required");
      return res
        .status(400)
        .json({ message: "Domain name and publisher ID are required" });
    }

    const existingDomain = await Domain.findOne({ domain });
    if (existingDomain) {
      console.error("This domain is already configured");
      return res.status(400).json({
        message: `This domain is already configured`,
      });
    }
    const publisher = await Publisher.findById(publisherId);
    if (!publisher) {
      console.error("Publisher not found");
      return res.status(404).json({ message: "Publisher not found" });
    }
    const newDomain = await Domain.create({
      domain,
      desktopAds,
      mobileAds,
      publisher: publisherId,
    });
    publisher.domains.push(newDomain._id);
    await publisher.save();
    return res.status(200).json({ message: "Created new domain" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving domain", error });
  }
};

export const updateDomain = async (req: Request, res: Response) => {
  console.info("Updating domain");
  try {
    const domainId = req.params.id;
    const { domainName, desktopAds, mobileAds } = req.body;
    const domain = await Domain.findById(domainId);
    if (!domain) {
      console.error("Domain not found");
      return res.status(404).json({ message: "Domain not found" });
    }
    domain.updateOne(
      { _id: domainId },
      { name: domainName, desktopAds, mobileAds }
    );
    return res.status(200).json({ message: "Updated domain" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving domain", error });
  }
};

export const deleteDomain = async (req: Request, res: Response) => {
  console.info("Delete domain");
  try {
    const domainId = req.params.id;
    const domain = await Domain.findById(domainId);
    if (!domain) {
      console.error("Domain not found");
      return res.status(404).json({ message: "Domain not found" });
    }
    await Domain.findByIdAndDelete(domainId);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving domain", error });
  }
};
