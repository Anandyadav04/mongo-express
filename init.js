import mongoose from "mongoose";
import dotenv from "dotenv";
import { Chat } from "./models/chat.js";

dotenv.config();

async function main() {
    await mongoose.connect(process.env.MONGO_URL)
}

main().then(res => console.log(res))

let allCahts = [
  {
    from: "Anand",
    to: "Rahul",
    msg: "Hey, are you free today?",
    created_at: new Date()
  },
  {
    from: "Rahul",
    to: "Anand",
    msg: "Yes, what’s up?",
    created_at: new Date()
  },
  {
    from: "Anand",
    to: "Rahul",
    msg: "Need help with MongoDB schemas",
    created_at: new Date()
  },
  {
    from: "aditya",
    to: "ram",
    msg: "hey, lets go to walk",
    created_at: new Date()
  }
]

Chat.insertMany(allCahts);