const express = require("express");
const app = express();

//Middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Express server!");
});

app.get("/about", (req, res) => {
    res.send("This is the About page.")
});

app.post("/contact", (req,res) => {
    const c = {name: "Adia"}
    res.status(200).json(c)
})

app.listen(3001, () => {
    console.log("Server started on http://localhost:3001");
})