const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors())
app.use(bodyParser.json())


const { Schema } = mongoose;


const newSchema = new Schema({

    name: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },


})

const Users = mongoose.model("users", newSchema)



// Get All users


app.get("/users", (req, res) => {
    Users.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(404).json({ message: err })
        }
    })
});

// Get User By Id

app.get("/users/:id", (req, res) => {
    const { id } = req.params
    Users.findById(id, (err, doc) => {
        if (!err) {
            if (doc) {
                res.send(doc)
            }
        }
        else {
            res.status(404).json({ message: err })
        }
    })
});


// Delete User By Id

app.delete("/users/:id", (req, res) => {
    const { id } = req.params
    Users.findByIdAndDelete(id, (err, doc) => {
        if (!err) {
            res.send({ message: "Succesfully deleted this item" })
        }
        else {
            res.status(404).json({ message: err })
        }
    })
});

// Post Add User 

app.post("/users", (req, res) => {
    let newuser = new Users({
        name: req.body.name,
        title: req.body.title,
        description: req.body.description
    })
    newuser.save();
    res.send({ message: "Succesfully added user" })
})



app.get("/", (req, res) => {
    res.send("<h1>Ishledi</h1>")
})



const PORT = process.env.PORT
const url = process.env.connection_url.replace(
    "<password>",
    process.env.PASSWORD
)

mongoose.set('strictQuery', true);
mongoose.connect(url, (err) => {
    if (!err) {
        console.log("Db is connected")

        app.listen(PORT, () => {
            console.log("Server is running")
        })
    }
})
