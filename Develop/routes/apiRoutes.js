const fs = require("fs");
const path = require("path");

module.exports = app =>{

    // setting up api route for notes
    app.get("/api/notes", (req,res) =>{
        res.json(notes);
    })
}