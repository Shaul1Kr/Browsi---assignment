import mongoose, { Schema } from "mongoose";
const domainSchema = new Schema({
  domain: { type: String, required: true },
  desktopAds: { type: Number, default: 0 },
  mobileAds: { type: Number, default: 0 },
  publisher: { type: Schema.Types.ObjectId, ref: "Publisher" },
});

const publisherSchema = new Schema({
  name: { type: String, required: true },
});

const Domain = mongoose.model("Domain", domainSchema);
const Publisher = mongoose.model("Publisher", publisherSchema);

export { Domain, Publisher };
