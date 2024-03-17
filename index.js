const express = require("express");
const students = require("./data/cars.json");
const route = require("./route");

/* Initiate express app */
const app = express();
const port = 3000;

/* Enable request body (json) */
app.use(express.json());

app.use("/", route);
/*  
    Enable static 
    It will enable the public directory can be loaded, if not loaded we can not access the index.html in the public directory
*/
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server running on ${port}!`);
});
