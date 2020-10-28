const fs = require("fs");
const path = require("path");

module.exports = app => {
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);

        // setting up api route for notes
        app.get("/api/notes", (req, res) => {
            res.json(notes);
        })

        // setting up a post route for notes api route
        app.post("/api/notes", (req, res) => {
            let addNote = req.body;
            notes.push(addNote);
        })
        // getting the unique id of the added note
        app.get("/api/notes/:id", (req, res) => {
            res.json(notes[req.params.id]);
        })


        // deleting the note with the selected id
        app.delete("/api/notes/:id", (req,res)=>{
            notes.splice(req.params.id, 1);
        });

        //sending the notes.hmtl file back to the user
        app.get("/notes", (req,res)=>{
            res.sendFile(path.join(__dirname, "../public/index.html"));
        })
    });
}