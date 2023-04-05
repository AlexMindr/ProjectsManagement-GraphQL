import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ClientSchema = new Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
});

const Client = mongoose.model("Client", ClientSchema);
export default Client;
