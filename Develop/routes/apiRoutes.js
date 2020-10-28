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
    // getting the unique id of the added note
    app.get("/api/notes/:id", (req,res)=>{
        res.json(notes[req.params.id]);
    })

}