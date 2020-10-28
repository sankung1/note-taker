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
            newDb();
        })
        // getting the unique id of the added note
        app.get("/api/notes/:id", (req, res) => {
            res.json(notes[req.params.id]);
        })


        // deleting the note with the selected id
        app.delete("/api/notes/:id", (req,res)=>{
            notes.splice(req.params.id, 1);
            newDb();
        });

        //sending the notes.hmtl file back to the user
        app.get("/notes", (req,res)=>{
            res.sendFile(path.join(__dirname, "../public/notes.html"));
        });

        //send the index.html file back to the user when they want to return home
        app.get("*", (req,res)=>{
            res.sendFile(path.join(__dirname, "../public/index.html"));
        })

        // this fucnction will update the db.json file
        function newDb(){
            fs.writeFile("db/db.json", JSON.stringify(notes, "\t"), error =>{
                if (error) throw error;
                return true;
            });
        }
    });
}