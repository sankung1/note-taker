const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

// setting up the express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// requiring the routes
require("./routes/apiRoutes")(app);

app.listen(PORT, ()=>{
    console.log(`Your're listening on Port ${PORT}`);
})