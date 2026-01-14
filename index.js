import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { Chat } from "./models/chat.js"

const app = express();
dotenv.config();
const port = process.env.PORT;

app.set("view engine", "ejs");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({extended: true}));

async function main() {     
    await mongoose.connect(process.env.MONGO_URL)
}

main()
    .then( () => console.log("connection successfull"))
    .catch( err => console.log(err))

app.get("/", (req, res) => {
    res.send("Welcome to weChat!")
});

// Show all chats
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    console.log(chats)
    // res.send("working")
    // res.json(chats)
    res.render("index.ejs", {chats})
});

//serve form to create new chat
app.get("/chats/new", (req, res) => {
    res.render("new.ejs")
});

//post the form 
app.post("/chats", (req, res) => {
    let {from, to, msg} = req.body;
    const newChat = new Chat({
        to: to,
        from: from,
        msg: msg,
        created_at: new Date()
    })
    newChat.save().then(res => console.log(res))
                .catch(err => console.log(err))
    
    res.redirect("/chats")
})

app.listen(port, (req, res) => {
    console.log(`Express server is listening at port ${port}`);
    
});