import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { Chat } from "./models/chat.js"
import methodOverride from "method-override"

const app = express();
dotenv.config();
const port = process.env.PORT;

app.set("view engine", "ejs");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

async function main() {     
    await mongoose.connect(process.env.MONGO_URL)
}

main()
    .then( () => console.log("connection successfull"))
    .catch( err => console.log(err))

app.get("/", (req, res) => {
    res.send("<p>Wlecome to weChat!</p> <br> <a href='/chats'>view all chats</a>")
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
});

//Serve form to edit message
app.get("/chats/:id/edit", async (req, res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id)
    console.log(chat);
    
    res.render("edit.ejs", {chat})
});

// PATCH THE form
app.patch("/chats/:id", (req, res) => {
    let {id} = req.params;
    let {msg: newmsg} = req.body;
    let chat = Chat.findByIdAndUpdate(
        id, 
        {msg: newmsg},
        {runValidators: true}
    );
    console.log(chat);
    
    res.redirect("/chats")
})

app.listen(port, (req, res) => {
    console.log(`Express server is listening at port ${port}`);
    
});