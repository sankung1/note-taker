const fs = require("fs");
const path = require("path");

module.exports = app =>{

    // setting up api route for notes
    app.get("/api/notes", (req,res) =>{
        res.json(notes);
    })
    
    // setting up a post route for notes api route
    app.post("/api/notes", (req, res) =>{
        let addNote = req.body;
        notes.push(addNote);       
    })

}